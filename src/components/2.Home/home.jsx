import React from 'react'
import './home.css'
import backgroundImage from '../../assets/pictures/fadeBackground.png'
import me from '../../assets/pictures/me.png';
function Home() {
  




  return (
    <>
      <section className='h-screen bg-repeat-x' id="homepage" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div id='block1' className=''>
          <div className='' id='home-text'>

              <h1>Kiran Isaacs</h1>
            
              <h2>Aspiring</h2>
            
              <h1>Software Developer</h1>
            
          </div> 
          <div className='' id='button'>
            <h1>Download CV</h1>
          </div>
        </div>

        <div id='block2' className=''>
          <div id='Home-Picture' className='w-full h-full rounded-2xl bg-center bg-cover duration-500 group' style={{backgroundImage: `url(${me})`}}></div>
        </div>
      </section>
    </>
  )
}

export default Home