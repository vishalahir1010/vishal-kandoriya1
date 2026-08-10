import "./App.css";

import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div className="container">

      <h1>Food Delivery Tracker</h1>

      <OrderForm />

      <OrderList />

    </div>
  );
}

export default App;