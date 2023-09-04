import React, {useEffect} from 'react'
import './skills.css'
import html from '../../assets/pictures/html.png';
import css from '../../assets/pictures/css.png';
import javascript from '../../assets/pictures/javascript.png';
import python from '../../assets/pictures/python.png';
import java from '../../assets/pictures/java.png';
import sql from '../../assets/pictures/sql.png';
import { useSkills, useSkillsRef } from '../GlobalCode';

{/**grid grid-cols-4 gap-4**/}
{/**w-full h-full rounded-2xl bg-center bg-cover**/}
function Skills() {

  const mySkillsRef = useSkillsRef();
  const mySkillsIsVisible = useSkills();

  return (
    
    <section id='skillsPage' className='w-full'>

      <div id='skills-text' className=''>
        <h1>SKILLS</h1>
      </div>
      
      <div className={`skills-container${mySkillsIsVisible ? "-active":""}`} ref={mySkillsRef}>

        <div id='container' className='max-w-[1400px]  relative grid '  >
          
          <div id='box' className=''> 
            <div id='square' className='B1 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${javascript})`}}>
              <h1>JavaScript</h1>
              
            </div>
          </div>        

          <div id='box' className='grid'>
            <div id='square' className='B2 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${python})`}}>
              <h1>Python</h1>
              <p></p>
            </div>
          </div>
              
          
          <div id='box' className='grid'>
            <div id='square' className='B3 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${java})`}}>
              <h1>Java</h1>
            </div>
          </div>

          <div id='box' className='grid'>
            <div id='square' className='B4 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${html})`}}>
              <h1>HTML</h1>
            </div>
          </div>

          <div id='box' className='grid'>
            <div id='square' className='B5 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${css})`}}>
              <h1>CSS</h1>
            </div>
          </div>

          <div id='box' className='grid'>
            <div id='square' className='B6 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${sql})`}}>
              <h1>SQL</h1>
            </div>
          </div>
        </div>
      </div>     
    </section>
  )
}

export default Skills