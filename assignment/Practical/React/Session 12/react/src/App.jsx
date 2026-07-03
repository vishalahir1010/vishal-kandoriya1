import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './Componets/TrendingSongs'
import IPLScores from './Componets/IPLScores'
import Api from './Componets/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TrendingSongs/>
    <IPLScores/>
    <Api/>
    </>
  )
}

export default App
