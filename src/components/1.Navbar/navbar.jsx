import React, { useState, useEffect, useContext } from 'react';
import './navbar.css';
import menu from './menu.jpg';
import open_menu from './navbar1.js';
import {useAbout, useSkills, useProjects, useForm} from './../GlobalCode'
import Background from '../../assets/pictures/footer2.png';

//fixed flex justify-between bg-transparent
export default function Navbar({}) {
 
//console.log('navbar is revcieving about page:', myAboutIsVisible)
const aboutIsVisible = useAbout();
const skillsIsVisible = useSkills();
const projectsIsVisible = useProjects();
const formIsVisible = useForm();



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
  //{`aboutMeContent${myAboutIsVisible ? "-active":""}`}






  return (
    <>  
      <section id='header-section'>
        <nav>
          <div id={headerId} className='w-screen'>
            <div className="logo">
              <a href="#" className="logo">Kir<span>a</span>n.</a>
            </div>

            
              <div className="navlist">
                  <a href="#homepage" onClick={open_menu}>Home</a>
                  <a href="#aboutpage" onClick={open_menu}>About</a>
                  <a href="#skillsPage" onClick={open_menu}>Skills</a>
                  <a href="#projects" onClick={open_menu}>Projects</a>
                  <a href="#contact" onClick={open_menu}>Contact</a>
              </div>
            

            <div className="" id='nav-icon' onClick={open_menu}>
              <img src={menu} alt="Nav_bar"/>
            </div>
          </div>
        </nav>   
      </section>
    </>  
  )
}
