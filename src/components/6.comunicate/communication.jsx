import React from 'react'
import './communication.css'
import slide from '../../assets/pictures/background.png';
import linkedin from '../../assets/pictures/linkedin-logo-24.png';
import github from '../../assets/pictures/github-logo-24.png';
import WhatsApp from '../../assets/pictures/user-regular-24.png';

function Communication() {
  const openGithubProfile = () => {
    window.open('https://github.com/kiran021859', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/kiran-isaacs-885184265/', '_blank');
  };

  


  return (
    <section id='contact' className='h-screen'>
      <div id='contact-text' className=''>
        <h1>CONTACT ME</h1>
      </div>
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
        <div className='flex' id='icons-div'>
          <div style={{backgroundImage: `url(${linkedin})`}} className='bg-center bg-cover' id='icons' onClick={openLinkedInProfile}></div>
          <div style={{backgroundImage: `url(${github})`}} className='bg-center bg-cover' id='icons' onClick={openGithubProfile}></div>
          <div style={{backgroundImage: `url(${WhatsApp})`}} className='bg-center bg-no-repeat' id='icons' onClick={openGithubProfile}></div>
        </div>
      </div>
    </section>
  )
}

export default Communication