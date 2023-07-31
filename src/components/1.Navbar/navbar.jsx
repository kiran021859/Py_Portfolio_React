import React from 'react'
import './navbar.css'

function Navbar() {


  return (
    <>  
      <section>
        <div id='header'>

          <ul className="navlist">
              <li><a href="#homepage">Home</a></li>
              <li><a href="#aboutpage">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact Me</a></li>
          </ul>
          
        </div>
      </section>
    </>  
  )
}

export default Navbar