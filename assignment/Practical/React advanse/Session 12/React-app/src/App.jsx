import { useEffect, useState } from "react";
import { db } from "./firebase";
import {  collection,  onSnapshot} from "firebase/firestore";
import RestaurantForm from "./Componets/RestaurantForm";
import RestaurantList from "./Componets/RestaurantList";
import Filter from "./Componets/Filter";

function App() {
  const [restaurants,setRestaurants] = useState([]);
  const [filter,setFilter] = useState("");
  useEffect(()=>{
    const unsubscribe = onSnapshot(
      collection(db,"restaurants"),
      (snapshot)=>{

        const data = snapshot.docs.map((doc)=>({

          id:doc.id,

          ...doc.data()

        }));

        setRestaurants(data);

      }
    );

    return ()=>unsubscribe();

  },[]);

  const filteredRestaurants = restaurants.filter((restaurant)=>
    restaurant.cuisine
    .toLowerCase()
    .includes(filter.toLowerCase())

  );

  return (

    <div>

      <h1>  Restaurant App </h1>
      <RestaurantForm />
      <br/>
      <Filter filter={filter}  setFilter={setFilter} />

      <RestaurantList restaurants={filteredRestaurants}/>

    </div>

  );

}


export default App;