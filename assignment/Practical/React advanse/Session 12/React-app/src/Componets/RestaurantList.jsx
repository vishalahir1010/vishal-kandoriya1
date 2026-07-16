function RestaurantList({ restaurants }) {

  return (

    <div>

      <h2>Restaurant List</h2>

      {
        restaurants.length === 0 ? (

          <p>No Restaurant Found</p>

        ) : (

          restaurants.map((restaurant)=>(

            <div key={restaurant.id}>

              <h3>
                {restaurant.name}
              </h3>

              <p>
                Cuisine: {restaurant.cuisine}
              </p>

              <hr/>

            </div>

          ))

        )
      }

    </div>

  );

}

export default RestaurantList;