import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function RestaurantForm() {

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !cuisine) {
      alert("Please fill all fields");
      return;
    }

    try {

      await addDoc(collection(db, "restaurants"), {
        name: name,
        cuisine: cuisine
      });

      setName("");
      setCuisine("");

    } catch(error) {
      console.log(error);
    }

  };


  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e)=>setCuisine(e.target.value)} />

      <br/><br/>

      <button type="submit">
        Add Restaurant
      </button>

    </form>
  );
}

export default RestaurantForm;