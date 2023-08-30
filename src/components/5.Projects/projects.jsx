import React, {useEffect, useRef, useState} from 'react'
import './projects.css'
//import html from './pictures/html.png';
//import css from './pictures/css.png';
import slide from '../../assets/pictures/background.png';
import website from '../../assets/pictures/school_website.png';
import snake from '../../assets/pictures/snake_1.png';
import battleShips from '../../assets/pictures/battleship_game.png';
import { useInView } from 'react-intersection-observer';


function Projects() {

  

  const { ref: myProjectsRef, inView: myProjectsIsVisible } = useInView();

  const openSchoolWebsite = () => {
    window.open('https://glittery-chebakia-1e38c0.netlify.app/', '_blank');
  };

  const openSnakeGame = () => {
    window.open('https://glittery-chebakia-1e38c0.netlify.app/games4u/games/snake/game5', '_blank');
  };

  const openBattleGame = () => {
    window.open('https://glittery-chebakia-1e38c0.netlify.app/games4u/games/snake/game5', '_blank');
  };

  
  
  //the code on top is === to the code at the bottom
  
  /*const myRef = useRef();

  const [myProjectsIsVisible, setMyProjectsIsVisible] = useState();

  console.log('myProjectsIsVisible', myProjectsIsVisible);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyProjectsIsVisible(entry.isIntersecting);

    })

    observer.observe(myRef.current)

  }, [] )*/

  

  return (
    <section id='projects' className='h-screen flex justify-center items-center'>

      <div id='projects-text' className='' >
        <h1>PROJECTS</h1>
      </div>

      <div id='project-container' className={`project-container${myProjectsIsVisible ? "-active":""}`} ref={myProjectsRef}>

        <div id='card' className='w-full  rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${website})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' onClick={openSchoolWebsite}>
            <h1>High School Website</h1>
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${snake})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' onClick={openSnakeGame}>
            <h1>Snake Game</h1>
          </div>
        </div>

        <div id='card' className='w-full h-full rounded-2xl bg-center bg-cover flex items-end' style={{backgroundImage: `url(${battleShips})`}}>
          <div id='hover' className='w-full h-full bg-center bg-cover' onClick={openBattleGame}>
            <h1>Battleships Game</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects