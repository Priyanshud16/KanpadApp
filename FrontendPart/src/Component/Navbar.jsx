import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/register">SignUp</Link>
        <Link to="/Login">Login</Link>
        <Link to="/">Notes</Link>
    </div>
  )
}

export default Navbar