import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './Componets/TrendingSongs'
import IPLScoreFetcher from './Componets/IPLScoreFetcher'
import MovieSuggestions from './Componets/MovieSuggestions'
import DataFetcher from './Componets/DataFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TrendingSongs/>
     <IPLScoreFetcher/>
     <MovieSuggestions/>
     <DataFetcher/>
    </>
  )
}

export default App
