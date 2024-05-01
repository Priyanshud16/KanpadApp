import React from 'react'
import  { Routes,Route } from 'react-router-dom'
import Signin from '../pages/Signin'
import Login from '../pages/Login'
import Notes from '../pages/pages'

function AllRoutes() {
  return (
    <Routes>
   <Route path='/register' element={<Signin/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/' element={
  
<Notes/>
  
   }/>
    </Routes>
  )
}

export default AllRoutes