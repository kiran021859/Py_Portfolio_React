import React from 'react'
import './projects.css'
//import html from './pictures/html.png';
//import css from './pictures/css.png';
import slide from './pictures/background.png';
import python from './pictures/python.png';
import java from './pictures/java.png';
import sql from './pictures/sql.png';

function Projects() {
  return (
    <section id='projects' className='h-screen flex justify-center'>
      <div id='project-container' className='max-w-[1400px] w-full py-16 px-4'>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${python})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${slide})`}}>
            
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${java})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${slide})`}}>
          
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${sql})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' style={{backgroundImage: `url(${slide})`}}>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects