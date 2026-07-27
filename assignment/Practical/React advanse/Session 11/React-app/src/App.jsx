import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Componets/Navbar";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import MyOrders from "./pages/MyOrders";

import ProtectedRoute from "./routes/ProtectedRoute";

function App(){
return(
<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/login"element={<Login/>}/>

<Route path="/profile"element={
<ProtectedRoute><Profile/></ProtectedRoute>}/>

<Route path="/myorders"element={
<ProtectedRoute>

</ProtectedRoute>}/>
</Routes>
</BrowserRouter>

)

}


export default App;