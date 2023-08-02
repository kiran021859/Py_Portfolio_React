import React, {useState} from 'react';
import './aboutMe.css';
import html from './pictures/html.png';
import me from './pictures/me.png';
import project from './pictures/My project.png';
import background from './pictures/background.png';



function AboutMe() {

const slides = [
  {url: me},
  {url: background}, 
  {url: html}, 
  {url: project},  
];

//grid grid-cols-2
//id='aboutMeSlideshow'
  return (
    <>
      <section className='h-screen' id="aboutpage">
        <div className='' id='aboutMeContent'> 
          <div className=''> 
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relattive'>
              <div style={{backgroundImage: `url(${slides[2].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
              </div>
              
            </div>
          </div>
          <div className='' id='aboutMeText'>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe