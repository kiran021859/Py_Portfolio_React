import React, {useState, useEffect} from 'react';
import './aboutMe.css';

import me from '../../assets/pictures/me.png';
import me1 from '../../assets/pictures/me1.png';
import me2 from '../../assets/pictures/me2.png';
import me3 from '../../assets/pictures/me3.png';
//import rightArrow from './pictures/right-arrow-solid-24.png';
//import leftArrow from './pictures/left-arrow-solid-24.png';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
//import { useInView } from 'react-intersection-observer';
import {useAbout, useAboutRef } from '../GlobalCode';
import { BiLogoLinkedin, BiLogoGithub, BiUser } from "react-icons/bi";
import CV from '../../assets/cv/CV-for-portfolio.pdf';

export default function AboutMe() {

  

 
  

  const slides = [
    {url: me},
    {url: me1}, 
    {url: me2}, 
    {url: me3},  
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0: currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  
  const myAboutRef = useAboutRef();
  const myAboutIsVisible = useAbout();
  
  /** icons links **/
  const openGithubProfile = () => {
    window.open('https://github.com/kiran021859', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/kiran-isaacs-885184265/', '_blank');
  };

//grid grid-cols-2

  return (
    <>
        <section className=''  id="aboutpage">
          <div className={`aboutMeContent${myAboutIsVisible ? "-active":""}`} ref={myAboutRef} > 
            <div id='aboutText1' className='text-center'>
              <h1>ABOUT ME</h1>
            </div>
            <div className='' id='aboutMeSlide_text'>
              <div className='' id="slidesShow">

                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 group' id='insideSlideShow'>
                  <div className='hidden group-hover:block absolute left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' id='leftButton'>
                    <BsChevronCompactLeft onClick={prevSlide} size='30'/>
                  </div>

                  <div className='hidden group-hover:block absolute right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' id='rightButton'>
                  <BsChevronCompactRight onClick={nextSlide} size='30'/>
                  </div>
                </div>
              </div>
              
              <div className='' id='aboutMeText'>
                <div id='aboutText2' className='border-t-4 border-b-4 rounded'>
                  <p>
                  I'm Kiran Isaacs, a proficient software developer skilled in HTML, CSS, JavaScript, Python, Java, and SQL. 
                  I excel in both front-end and back-end development, creating user-friendly interfaces and dynamic features 
                  linked to robust databases.<br/> <br/>

                  I studied Business Systems at Rosbank College, gaining technical and analytical skills. During a 6-month system 
                  development learnership at Capaciti, I immersed myself in the software development lifecycle, refining my 
                  abilities and learning effective collaboration. With a solid programming foundation and practical experience, 
                  I'm well-prepared for challenging projects, driven by my passion for efficient applications aligned with business 
                  goals.
                  </p>
                  <div className='icons-div' id='inside-icons-container'>
                    <div className='icons' onClick={openLinkedInProfile}><BiLogoLinkedin size='20' color='white'/></div>
                    <a href={CV} target="_blank" rel="noopener noreferrer"><div className='icons'>CV</div></a>
                    <div className='icons' onClick={openGithubProfile}><BiLogoGithub size='20' color='white'/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}


