import React, { useRef } from 'react'
import './App.css'
import Navbar from './components/1.Navbar/navbar'
import Home from './components/2.Home/home'
import Aboutme from './components/3.AboutMe/aboutMe'
import Skills from './components/4.Skills/skills'
import Projects from './components/5.Projects/projects'
import Communicate from './components/6.comunicate/communication'

import { SlideProvider } from './components/GlobalCode'

//import CommonParentComponent from './components/CommonParentComponent';




function App() {
  
  

  return (
    <>
    <SlideProvider>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Communicate/>
      
    </SlideProvider>
      
    </>
    
  )
}

export default App
//