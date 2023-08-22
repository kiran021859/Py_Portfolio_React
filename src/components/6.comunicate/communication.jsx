import React, {useEffect, useState} from 'react'
import './communication.css'
import slide from '../../assets/pictures/background.png';
import linkedin from '../../assets/pictures/linkedin-logo-24.png';
import github from '../../assets/pictures/github-logo-24.png';
import WhatsApp from '../../assets/pictures/user-regular-24.png';
import AOS from "aos";
import "aos/dist/aos.css";

function Communication() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const openGithubProfile = () => {
    window.open('https://github.com/kiran021859', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/kiran-isaacs-885184265/', '_blank');
  };

  const [userData, setUserData] = useState({
    Name: '', Email: '', PhoneNumber: '', MsgContent: ''
  });

  const Data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    const { Name, Email, PhoneNumber, MsgContent } = userData;
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Corrected content type spelling
      },
      body: JSON.stringify({
        Name, Email, PhoneNumber, MsgContent,
      })
    };
    const res = await fetch('https://react-js-portfolio-db-default-rtdb.firebaseio.com/Messages.json', option);  // Corrected URL spelling
    console.log(res);
  };


  return (
    <section id='contact' className='h-screen'>
      <div id='contact-text' className='' data-aos="fade-up">
        <h1>CONTACT ME</h1>
      </div>
      <div id='contact-form' className="" style={{backgroundImage: `url(${slide})`}} data-aos="fade-left">
        <form action="" method="POST">
            <input type="text" name="Name" value={userData.Name} placeholder="Name:" onChange={Data}></input>
            <input type="email" name="Email" value={userData.Email} placeholder="Email:" onChange={Data}></input>
            <input type="number" name="PhoneNumber" value={userData.PhoneNumber} placeholder="Mobile Number:" onChange={Data} ></input>
            <textarea name="MsgContent" value={userData.MsgContent} cols="35" rows="10" placeholder="How Can I Help You:" onChange={Data} ></textarea>
            <button type="submit" value="Send Message" id="submit" onClick={send}>Submit</button>
        </form> 
      </div>
      <div id='icons-container' className=''>
        
        <div className='flex' id='icons-div' data-aos="fade-right">
          <div style={{backgroundImage: `url(${linkedin})`}} className='bg-center bg-cover' id='icons' onClick={openLinkedInProfile}></div>
          <div style={{backgroundImage: `url(${github})`}} className='bg-center bg-cover' id='icons' onClick={openGithubProfile}></div>
          <div style={{backgroundImage: `url(${WhatsApp})`}} className='bg-center bg-no-repeat' id='icons' onClick={openGithubProfile}></div>
        </div>
      </div>
    </section>
  )
}

export default Communication