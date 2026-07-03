import React from 'react'
// import useFetchData from '../hooks/useFetchData'
import useFetchData1 from '../hooks/useFetchData1'

export default function ProductList() {
    const { data , loading , error ,refetch} = useFetchData1('https://fakestoreapi.com/products')
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
  return (
    <div>
      <h2>Product</h2>
      {data.map(p=>(
        <h4 key={p.id}>{p.title}</h4>
      ))}
      <button onClick={refetch} style={{borderRadius:"15px"}}>Reload</button>
    </div>
  )
}
