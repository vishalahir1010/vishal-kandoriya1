
import OrderTracking from './component/OrderTracking'

function App() {


  return (
    <>
      <OrderTracking/>
    </>
  )
}

export default App


// question's answer

// The two React hooks used for this scenario are `useState` and `useEffect`. The `useState` hook is used to store the current order status, while the `useEffect` hook is responsible for calling the backend API after the component has been rendered. On the initial render, React first executes the component function, initializes the state using `useState`, renders the UI, and then runs the `useEffect` hook. Inside `useEffect`, the API request is made, and when the response is received, `setOrderStatus` updates the state. This state update triggers React to re-render the component, automatically displaying the latest order status without reloading the page. The API call should be placed inside `useEffect` instead of directly inside the component function because the component function runs on every render. If the API call were written directly in the component body, it would execute on every render, causing repeated API requests and potentially creating an infinite re-render loop when the state is updated. Using `useEffect` ensures that the API is called only when needed, such as once on the initial render when an empty dependency array (`[]`) is provided.
