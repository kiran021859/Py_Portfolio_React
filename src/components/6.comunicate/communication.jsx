import React from 'react'
import './communication.css'
import slide from '../../assets/pictures/background.png';
import linkedin from '../../assets/pictures/linkedin-logo-24.png';
import github from '../../assets/pictures/github-logo-24.png';
import WhatsApp from '../../assets/pictures/user-regular-24.png';

function Communication() {
  return (
    <section id='contact' className='h-screen flex justify-center items-center'>
      <div id='contact-form' className="" style={{backgroundImage: `url(${slide})`}}>
        <form action="https://formsubmit.co/kiranisaacs12@gmail.com" method="POST">
            <input type="name" name="name" placeholder="Name:" required></input>
            <input type="email" name="email" placeholder="Email:" required></input>
            <input type="" name="phone number" placeholder="Mobile Number:" required></input>
            <textarea name="message" id="" cols="35" rows="10" placeholder="How Can I Help You:" required></textarea>
        </form> 
      </div>
      <div id='icons-container' className=''>
        <input type="submit" value="Send Message" id="submit" required></input>
        <div style={{backgroundImage: `url(${linkedin})`}} className='bg-center bg-cover' id='icons'></div>
        <div style={{backgroundImage: `url(${github})`}} className='bg-center bg-cover' id='icons'></div>
        <div style={{backgroundImage: `url(${WhatsApp})`}} className='bg-center bg-no-repeat' id='icons'></div>
      </div>
    </section>
  )
}

export default Communication