import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../hooks/useFetchData"

export default function useFetchData(url) {
    const [data , setData] = useState([])
    const [error , setError] = useState("")
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        let isMouted = true
        axios.get(url)
        .then(res =>{if(isMouted)setData(res.data)})
        .catch(()=>setError("failed to load data"))
        .finally(()=>setLoading(false))
        return()=>(isMouted = false)
    },[url])
    return{data , loading, error}
}
