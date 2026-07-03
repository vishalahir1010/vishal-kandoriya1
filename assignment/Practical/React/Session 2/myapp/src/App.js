import logo from './logo.svg';
import './App.css';

import Props from './Componets/Props';
import MiniProfile from './Componets/MiniProfile';
import UserGreetingClass from './Componets/UserGreetingClass';



function App() {
 
  return (
   <>
<UserGreetingClass/>
<Props title={"vishal"}/>
<MiniProfile/>

   </>
  );
}

export default App;
