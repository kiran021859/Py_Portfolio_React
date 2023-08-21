import React, {useEffect} from 'react'
import './projects.css'
//import html from './pictures/html.png';
//import css from './pictures/css.png';
import slide from '../../assets/pictures/background.png';
import python from '../../assets/pictures/python.png';
import java from '../../assets/pictures/java.png';
import sql from '../../assets/pictures/sql.png';
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='projects' className='h-screen flex justify-center items-center'>

      <div id='projects-text' className='' data-aos="fade-up">
        <h1>PROJECTS</h1>
      </div>

      <div id='project-container' className='w-full py-16 px-4' data-aos="fade-left">

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