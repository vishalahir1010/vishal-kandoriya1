import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './Componets/SearchBar'
import LoginForm from './Componets/LoginForm'
import FeedbackForm from './Componets/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar/>
      <LoginForm/>
      <SearchBar/>
      <FeedbackForm/> 
    </>
  )
}

export default App
