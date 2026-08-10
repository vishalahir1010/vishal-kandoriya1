import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot as firebaseOnSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

let firebaseApp = null;
let auth = null;
let db = null;

const hasRealConfig = Object.values(firebaseConfig).every(Boolean);

if (typeof window !== "undefined" && hasRealConfig) {
  try {
    firebaseApp = getApps().length
      ? getApps()[0]
      : initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
    db = getFirestore(firebaseApp);
  } catch (error) {
    console.warn(
      "Firebase initialization failed; falling back to local storage.",
      error,
    );
  }
}

const AUTH_KEY = "food-delivery-auth";
const ORDERS_KEY = "food-delivery-orders";

function readStoredUser() {
  if (typeof window === "undefined") return null;
  const saved = window.localStorage.getItem(AUTH_KEY);
  return saved ? JSON.parse(saved) : null;
}

function persistUser(user) {
  if (typeof window === "undefined") return;
  if (user) {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(AUTH_KEY);
  }
}

function emitAuthChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("food-auth-change"));
  }
}

function emitOrdersChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("food-orders-change"));
  }
}

function readOrders() {
  if (typeof window === "undefined") return [];
  const saved = window.localStorage.getItem(ORDERS_KEY);
  return saved ? JSON.parse(saved) : [];
}

function persistOrders(orders) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function onAuthStateChanged(callback) {
  if (auth) {
    return firebaseOnAuthStateChanged(auth, callback);
  }

  const currentUser = readStoredUser();
  callback(currentUser);

  if (typeof window === "undefined") return () => {};

  const listener = () => callback(readStoredUser());
  window.addEventListener("food-auth-change", listener);
  return () => window.removeEventListener("food-auth-change", listener);
}

export async function signUp(email, password) {
  if (auth) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  }

  const user = { id: Date.now().toString(), email };
  persistUser(user);
  emitAuthChange();
  return user;
}

export async function signIn(email, password) {
  if (auth) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  }

  const user = { id: Date.now().toString(), email };
  persistUser(user);
  emitAuthChange();
  return user;
}

export async function signOut() {
  if (auth) {
    await firebaseSignOut(auth);
    return;
  }

  persistUser(null);
  emitAuthChange();
}

export async function placeOrder(order) {
  if (db) {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  }

  const orders = [...readOrders(), order];
  persistOrders(orders);
  emitOrdersChange();
  return order.id;
}

export function onOrdersSnapshot(callback) {
  if (db) {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    return firebaseOnSnapshot(q, (snapshot) => {
      const orders = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      callback(orders);
    });
  }

  callback(readOrders());

  if (typeof window === "undefined") return () => {};

  const listener = () => callback(readOrders());
  window.addEventListener("food-orders-change", listener);
  return () => window.removeEventListener("food-orders-change", listener);
}
