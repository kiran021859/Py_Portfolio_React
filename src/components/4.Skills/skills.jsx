import React from 'react'
import './skills.css'
import html from './pictures/html.png';
import css from './pictures/css.png';
import javascript from './pictures/javascript.png';
import python from './pictures/python.png';
import java from './pictures/java.png';
import sql from './pictures/sql.png';
{/**grid grid-cols-4 gap-4**/}

function Skills() {
  return (
    
    <section id='skillsPage' className='h-screen '>
      <div className='' id='BSPosition'>
        <div id='bigSquare' className='max-w-[1400px] h-[780px] w-full py-16 px-4  '>

          <div className='flex' id='row1'>

          
              <div id='square1' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${javascript})`}}>
                <h1>JavaScript</h1>
              </div>
            

          
              <div id='square2' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${python})`}}>
                <h1>Python</h1>
              </div>
              
          </div>

          <div id='square3' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${java})`}}>
            <h1>Java</h1>
          </div>

          <div id='square4' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${html})`}}>
            <h1>HTML</h1>
          </div>

          <div id='square5' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${css})`}}>
            <h1>CSS</h1>
          </div>

          <div id='square5' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${sql})`}}>
            <h1>SQL</h1>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills