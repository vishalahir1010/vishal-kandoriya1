import React, { useState } from 'react'

const EvwentHandlingDemo = () => {
    const [fullname , serFullname] = useState("")
    const [email, setEmail] = useState("")
    const [submitdatteData , setSubmitteData] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitteData({fullname, email});

    }
}
  return (
    <div style={{margin:"30px"}}>
      <h2>Even Handling Demo</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Fall Name:</label>
        <input type="text" value={fallname} onChange={(e.target.value)}  placeholder='Enter fullname' />
        </div>
        <div style={{marginTop:"10px"}}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e.target.value)} placeholder='enter your email'/>
        </div>
        <button type='submit' style={{marginTop:"15px"}}>
            Submit
        </button>
        
      </form>
      {submitdatteData && (
        <div style={{marginTop:"20px"}}>
            <h3>Submitted data:</h3>
            <p>Name: {submittedData.fullname}</p>
            <p>Email: {submitdatteData.email}</p>
        </div>
      )}
    </div>
    
  )
