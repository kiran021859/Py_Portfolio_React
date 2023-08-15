import React from 'react'
import './footer.css';
import Background from '../../assets/pictures/footer2.png';


function Footer() {
  

  return (
    <div className='bg-no-repeat w-full bg-cover flex justify-center items-center' id='footer' style={{backgroundImage: `url(${Background})`}}>
      <div className='' id='footer-button'>
      <a href="#homepage">GO TO HOME</a>
      </div> 

    </div>
  )
}

export default Footer