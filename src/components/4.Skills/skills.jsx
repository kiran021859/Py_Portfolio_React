import React, {useEffect} from 'react'
import './skills.css'
import html from '../../assets/pictures/html.png';
import css from '../../assets/pictures/css.png';
import javascript from '../../assets/pictures/javascript.png';
import python from '../../assets/pictures/python.png';
import java from '../../assets/pictures/java.png';
import sql from '../../assets/pictures/sql.png';
import AOS from "aos";
import "aos/dist/aos.css";
{/**grid grid-cols-4 gap-4**/}
{/**w-full h-full rounded-2xl bg-center bg-cover**/}
function Skills() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    
    <section id='skillsPage' className='h-screen w-full'>

      <div id='skills-text' className='' data-aos="fade-up">
        <h1>SKILLS</h1>
      </div>

      <div id='container' className='max-w-[1400px]  relative grid '  >
        
        <div id='box' className='' data-aos="fade-right"> 
          <div id='square' className='B1 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${javascript})`}}>
            <h1>JavaScript</h1>
            
          </div>
        </div>        

        <div id='box' className='grid' data-aos="fade-left">
          <div id='square' className='B2 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${python})`}}>
            <h1>Python</h1>
            <p></p>
          </div>
        </div>
            
        
        <div id='box' className='grid' data-aos="fade-right">
          <div id='square' className='B3 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${java})`}}>
            <h1>Java</h1>
          </div>
        </div>

        <div id='box' className='grid' data-aos="fade-left">
          <div id='square' className='B4 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${html})`}}>
            <h1>HTML</h1>
          </div>
        </div>

        <div id='box' className='grid' data-aos="fade-right">
          <div id='square' className='B5 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${css})`}}>
            <h1>CSS</h1>
          </div>
        </div>

        <div id='box' className='grid' data-aos="fade-left">
          <div id='square' className='B6 w-full h-full rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${sql})`}}>
            <h1>SQL</h1>
          </div>
        </div>
      </div>   
    </section>
  )
}

export default Skills