import React, {useEffect, useState, useRef} from 'react'
import './communication.css'
import slide from '../../assets/pictures/background.png';
import linkedin from '../../assets/pictures/linkedin-logo-24.png';
import github from '../../assets/pictures/github-logo-24.png';
import WhatsApp from '../../assets/pictures/user-regular-24.png';
import { useInView } from 'react-intersection-observer';

function Communication() {
 

  const { ref: myTableRef, inView: myTableIsVisible } = useInView();

  const { ref: myIconsRef, inView: myIconsIsVisible } = useInView();
  
  

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

    setUserData({
      Name: '', 
      Email: '', 
      PhoneNumber: '', 
      MsgContent: ''
    });
    
  };

  const sentText = useRef(null);
  const [isSentTextVisible, setSentTextVisible] = useState(true);

  const toggleSentTextDisplay = () => {
    const { current } = sentText;
    current.style.display = isSentTextVisible ? 'none' : 'flex';
    setSentTextVisible(!isSentTextVisible);
  };

  

  

  return (
    <section id='contact' className='h-screen'>
      <div id='contact-text' className='' >
        <h1>CONTACT ME</h1>
      </div>
      <div id='' className={`contact-form${myTableIsVisible ? "-active":""}`} style={{backgroundImage: `url(${slide})`}} ref={myTableRef}>
        <form id='form' action="" method="POST">
            <input id='input' type="text" name="Name" value={userData.Name} placeholder="Name:" onChange={Data}></input>
            <input id='input' type="email" name="Email" value={userData.Email} placeholder="Email:" onChange={Data}></input>
            <input id='input' type="number" name="PhoneNumber" value={userData.PhoneNumber} placeholder="Mobile Number:" onChange={Data} ></input>
            <textarea id='textarea' name="MsgContent" value={userData.MsgContent} cols="35" rows="10" placeholder="How Can I Help You:" onChange={Data} ></textarea>
            <div id='Button-Message'>
            <button type="submit" value="Send Message" id="submit" onClick={send}>Submit</button>
            <div id='messageSent-text' className='' ref={sentText}>Message Sent</div>
            </div>
        </form> 
      </div>
      <div id='icons-container' className=''>
        
        <div className={`icons-div${myIconsIsVisible ? "-active":""}`} id='' ref={myIconsRef}>
          <div style={{backgroundImage: `url(${linkedin})`}} className='bg-center bg-cover' id='icons' onClick={openLinkedInProfile}></div>
          <div style={{backgroundImage: `url(${github})`}} className='bg-center bg-cover' id='icons' onClick={openGithubProfile}></div>
          <div style={{backgroundImage: `url(${WhatsApp})`}} className='bg-center bg-no-repeat' id='icons' onClick={openGithubProfile}></div>
        </div>
      </div>
    </section>
  )
}

export default Communication