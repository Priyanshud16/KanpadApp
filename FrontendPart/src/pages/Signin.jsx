import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  async function HandleSubmit(e){
e.preventDefault()
try {
  const data=await fetch("https://fullstackp-2backend.onrender.com/user/register",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username,
      email,
      password
    })
    
  })
  let res=await data.json()
  console.log(res);
  alert("User Registered Successfully")
  navigate("/login")
} catch (error) {
  
}
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={HandleSubmit}>
        <input placeholder="Enter Your UserName" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default Signin