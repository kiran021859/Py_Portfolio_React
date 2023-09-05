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


  console.log(
    "about:",aboutIsVisible,"\n",
    "Skills:",skillsIsVisible,"\n",
    "Projects:",projectsIsVisible,"\n",
    "Form:",formIsVisible,"\n",
    
  );

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

            <div className="nav-list">
              <ul className="navlist">
                  <li><a href="#homepage">Home</a></li>
                  <li className={`about${aboutIsVisible ? "-active":""}`} ><a href="#aboutpage">About</a></li>
                  <li className={`skills${skillsIsVisible ? "-active":""}`} ><a href="#skillsPage">Skills</a></li>
                  <li className={`projects${projectsIsVisible ? "-active":""}`} ><a href="#projects">Projects</a></li>
                  <li className={`communication${formIsVisible ? "-active":""}`} ><a href="#contact">Contact</a></li>
              </ul>
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
