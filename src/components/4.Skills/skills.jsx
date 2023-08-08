import React from 'react'
import './skills.css'
import html from './pictures/html.png';
import css from './pictures/css.png';
import javascript from './pictures/javascript.png';
import python from './pictures/python.png';
import java from './pictures/java.png';
import sql from './pictures/sql.png';
{/**grid grid-cols-4 gap-4**/}
{/**w-full h-full rounded-2xl bg-center bg-cover**/}
function Skills() {
  return (
    
    <section id='skillsPage' className='h-screen '>
      <div className='' id='BSPosition'>
        <div id='bigSquare' className='max-w-[1400px] h-[780px] w-full py-16 px-4 '>
          <div className='flex '>
  
            <div id='container' className='max-w-[1400px]  relative grid '>

              <div id='box' className='grid '> 
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${javascript})`}}>
                  <h1>JavaScript</h1>
                </div>
              </div>        

              <div id='box' className='grid'>
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${python})`}}>
                  <h1>Python</h1>
                </div>
              </div>
                  
              
              <div id='box' className='grid'>
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${java})`}}>
                  <h1>Java</h1>
                </div>
              </div>

              <div id='box' className='grid'>
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${html})`}}>
                  <h1>HTML</h1>
                </div>
              </div>

              <div id='box' className='grid'>
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${css})`}}>
                  <h1>CSS</h1>
                </div>
              </div>

              <div id='box' className='grid'>
                <div id='square' className='w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${sql})`}}>
                  <h1>SQL</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills