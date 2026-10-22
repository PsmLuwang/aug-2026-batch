import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between p-5 bg-blue-400'>
      <h1>React Class</h1>
      
      <div className='flex gap-3'>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/props">Props</Link>
        <Link to="/hooks">Hooks</Link>
        <Link to="/form">Form</Link>
      </div>
    </div>
  )
}

export default NavBar