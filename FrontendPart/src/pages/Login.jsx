import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const navigate=useNavigate()
  async function HandleSubmit(e){
e.preventDefault()
try {
  let res=await fetch("https://fullstackp-2backend.onrender.com/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  })
  let data=await res.json()
  console.log(data)
  localStorage.setItem("token",data.token)
  alert("login successfully")
 
navigate("/")
} catch (error) {
  
}
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={HandleSubmit}>
      <input type="text" placeholder='Enter Your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Login