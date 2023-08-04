import React, { useState } from 'react';
import './navbar.css';
import menu from './menu.jpg';
import open_menu from './navbar1.js';
//import react, {useState} from 'react';
//import handleScroll from './navbar1.js';

function Navbar() {
  //const [navbar, setNavbar] = useState(false);
  
  return (
    <>  
      <section>
        <nav>
          <div id='header' className="fixed flex justify-between bg-transparent">
            <div className="logo">
              <a href="#" className="logo">Kir<span>a</span>n.</a>
            </div>

            <div className="nav-list">
              <ul className="navlist">
                  <li><a href="#homepage">Home</a></li>
                  <li><a href="#aboutpage">About</a></li>
                  <li><a href="#skillsPage">Skills</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="nav-icon" onClick={open_menu}>
              <img src={menu} alt="Nav_bar"/>
            </div>
          </div>
        </nav>   
      </section>
    </>  
  )
}

export default Navbar