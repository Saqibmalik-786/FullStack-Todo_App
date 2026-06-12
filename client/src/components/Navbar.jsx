import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className="titleDiv">
            <h1>ApnaTodo</h1>
        </div>
        <div className="navBtns">
            <Link to="/signin"><button className='loginbtn'>Login</button></Link>
            <Link to="/signup"><button className='signupbtn'>Signup</button></Link>
        </div>
    </nav>
  )
}

export default Navbar