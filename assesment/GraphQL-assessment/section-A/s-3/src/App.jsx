import MenuPage from "./components/MenuPage"
import OrderHistory from "./components/OrderHiistory"
import RestaurantList from "./components/RestaurantList"


function App() {
 

  return (
    <>
    <h1>Menu Page</h1>
    <MenuPage/>
    <hr />
    <h1>Restaurant List</h1>
    <RestaurantList/>
    <hr />
    <h1>Order History</h1>
    <OrderHistory/>
    </>
  )
}

export default App

// To eliminate duplication, I would extract the common fetching logic into a custom hook named `useFetchData`. This hook would contain the `useState` hooks for managing `data`, `loading`, and `error`, along with a `useEffect` hook that performs the API request whenever the provided URL changes. Each component, such as the restaurant listing page, menu page, and order history screen, can call this hook with its own API endpoint and receive the required data without rewriting the same fetch logic. According to React's naming convention, every custom hook must begin with the prefix **`use`**, such as `useFetchData`, so React recognizes it as a hook and applies the Rules of Hooks correctly. The custom hook should return an object containing `data`, `loading`, and `error`, allowing each component to use these values independently. Although the hook is reused across multiple components, every component gets its own separate state because each hook invocation creates a new instance, ensuring that no state is shared between them.
