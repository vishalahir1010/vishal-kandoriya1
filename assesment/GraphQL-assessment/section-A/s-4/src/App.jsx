import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="container">
      <RestaurantMenu />
      <CartDrawer />
      <Checkout />
    </div>
  );
}

export default App;

// For this food delivery application, both React Context API and Redux can be used to manage the shared cart state across the restaurant menu page, cart drawer, and checkout page. React Context API is suitable for small to medium-sized applications where the cart state is relatively simple and does not require complex business logic. It allows multiple components to access and update the same cart data without prop drilling. However, as the application grows and the cart logic becomes more complex, Redux becomes a better choice. Redux provides a centralized store, predictable state management, better debugging with Redux DevTools, and a clear structure for handling actions and reducers, making it easier to maintain a large-scale application with many developers. Therefore, Redux is more suitable for a production-scale food delivery app that includes features such as cart management, user authentication, order tracking, wishlist, payment status, and notifications. When the cart feature needs to call a server API to apply a promo code, Redux Thunk solves the problem of handling asynchronous operations. It allows action creators to perform API requests before dispatching actions to the Redux store. For example, Redux Thunk can send the promo code to the server, wait for the validation response, and then dispatch either a success action to update the discounted total or a failure action to display an error message. This keeps asynchronous logic separate from reducers, ensuring that reducers remain pure functions while making the application easier to manage and scale.
