import React, { useState, useEffect } from 'react';
import './navbar.css';
import menu from './menu.jpg';
import open_menu from './navbar1.js';

//fixed flex justify-between bg-transparent
function Navbar() {
 

const [headerId, setHeaderId] = useState('header');
  
const handleScroll = () => {
  if (window.scrollY > 100) {
    setHeaderId('header1');
  } else {
    setHeaderId('header');
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  
  return (
    <>  
      <section>
        <nav>
          <div id={headerId} className='helo'>
            <div className="logo">
              <a href="#" className="logo">Kir<span>a</span>n.</a>
            </div>

            <div className="nav-list">
              <ul className="navlist">
                  <li><a href="#homepage">Home</a></li>
                  <li><a href="#aboutpage">About</a></li>
                  <li><a href="#skillsPage">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
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