
import axios from 'axios';
import React, { useEffect,useState } from 'react'

export default function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState("");

  const fetchScores = async() =>{
    try{
      const response = await axios.get(" https://jsonplaceholder.typicode.com/users")
      setScores(response.data)
    }catch(err){
    setError("Error loadind data")
    }
  }

  useEffect(()=>{
    fetchScores()
  },[])
  return (
    
    <div>
      <h1>Scores</h1>
      {error ?(
        <h2>Error loading scores</h2>
      ):(
        <div>
          {scores.map((e)=>(
            <div key={e.id}>{e.id} - {e.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
