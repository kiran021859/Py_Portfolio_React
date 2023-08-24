import React, {useEffect, useRef, useState} from 'react'
import './projects.css'
//import html from './pictures/html.png';
//import css from './pictures/css.png';
import slide from '../../assets/pictures/background.png';
import python from '../../assets/pictures/python.png';
import java from '../../assets/pictures/java.png';
import sql from '../../assets/pictures/sql.png';
import { useInView } from 'react-intersection-observer';


function Projects() {

  const { ref: myRef, inView: myElementIsVisible } = useInView();

 
  
  //the code on top is === to the code at the bottom
  
  /*const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log('myElementIsVisible', myElementIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current)
  }, [] )*/

  

  return (
    <section id='projects' className='h-screen flex justify-center items-center'>

      <div id='projects-text' className='' >
        <h1>PROJECTS</h1>
      </div>

      <div id='project-container' className={`project-container${myElementIsVisible ? "-active":""}`} ref={myRef}>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${python})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' >
            <h1>High School Website</h1>
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${java})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover'>
            <h1>Chat App</h1>
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${sql})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover'>
            <h1>Battleships Game</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects