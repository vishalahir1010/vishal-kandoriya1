import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Task 1 */}

          {/* query {
                pokemon1: pokemon(name: "pikachu") {
                  name
                  image
                }

                pokemon2: pokemon(name: "charizard") {
                  name
                  image
                }

                pokemon3: pokemon(name: "bulbasaur") {
                  name
                  image
                }
              } */}



      {/* Task 2 */}

            {/* query {
                  pokemon(name: "pikachu") {
                    name
                    types
                    maxHP
                  }
                } */}


      {/* Task 3 */}

              {/* GraphQL	
              1. Fetches only the fields the client requests (no extra data).	
              2. Can retrieve related data in a single request (e.g., product, seller, and reviews together).	
              3. Reduces network usage and improves app performance by sending only required data.	


              REST
              1. Usually returns the complete resource, even if much of it isn't needed.
              2. Often requires multiple API requests to different endpoints.
              3. May transfer unnecessary data, increasing bandwidth and loading time.

              Example:

              Flipkart: A product page may only need product name, price, and image. GraphQL returns only these fields.
              Zomato: A restaurant list may only need restaurant name, rating, and delivery time instead of the complete restaurant object. */}



      {/* Task 4 */}

            {/* schema */}
                      {/* type Movie {
                  title: String
                  rating: Float
                  poster: String
                }

                type Query {
                  movie(title: String): Movie
                } */}

            {/* query */}
                    {/* query {
                  movie(title: "Inception") {
                    title
                    poster
                  }
                } */}


      {/* Task 5 */}

            {/* mutation {
              addPlaylist(
                name: "Workout Mix"
                description: "High energy songs for workouts"
              ) {
                id
                name
                description
              }
            } */}

    </>
  );
}

export default App;
