import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
    <h3>Today </h3>
    <h1>{new Date().toLocaleDateString()}</h1> 
    </div>


  )
}

export default Header