import React from 'react'
import './App.css'
const Navigation = () => {
  return (
    <div>
        <nav>
      <div className='logo'>
        <img src='/Images/lens.png' alt='logo' width={50} height={40}></img> 
      </div>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Location</a></li>
        <li><a href='#'>Menu </a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <button>Login</button>
    </nav>
    </div>
  )
}

export default Navigation
