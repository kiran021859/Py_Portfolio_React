import React, {useEffect, useState, useRef} from 'react'
import './communication.css'
import slide from '../../assets/pictures/background.png';

import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import Footer from './../7.Footer/footer.jsx'
import { useForm, useFromRef } from '../GlobalCode';




function Communication() {
 

  
  
  


  /** collect and send form data to realtime database (firebase)**/

  const [userData, setUserData] = useState({
    Name: '', Email: '', PhoneNumber: '', MsgContent: ''
  });

  const Data = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "PhoneNumber" && !validationRegex.phoneNumber.test(value)) {
      return; // Prevent updating state for invalid phone numbers
    }

    setUserData({ ...userData, [name]: value });
  };
  
  const [captchaValue, setCaptchaValue] = useState(null);

  const form = useRef();

  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, PhoneNumber, MsgContent } = userData;

    /**validation start **/
    if (!captchaValue) {                //capthca validation
      alert("Please complete the CAPTCHA");
      return;
    }

    if (!validationRegex.name.test(Name)) {         
      alert("Invalid name format");
      return;
    }
  
    if (!validationRegex.email.test(Email)) {
      alert("Invalid email format");
      return;
    }
  
    if (!validationRegex.phoneNumber.test(PhoneNumber)) {
      alert("Invalid phone format");
      return;
    }

    /*validation end*/

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        Name, Email, PhoneNumber, MsgContent,
      })
    };
    const res = await fetch('https://react-js-portfolio-db-default-rtdb.firebaseio.com/laptops.json', option);  
    console.log(res);

    

      /**send email code start**/

    /**const smtpName = import.meta.env.VITE_smtpjs_Username;
    const smtpPassword = import.meta.env.VITE_smtpjs_Password;
    const smtpHost = import.meta.env.VITE_smtpjs_Host;
    const smtpPort = import.meta.env.VITE_smtpjs_Port;
    const smtpToken = import.meta.env.VITE_smtpjs_Token;

    const config = {
      SecureToken : smtpToken,
      To : 'kiranisaacs12@gmail.com',
      From : "kiran.isaacs@youngings.africa",
      Subject : "This is the subject",
      Body : "And this is the body", 
    };
    
    console.log(smtpToken);
    if (window.Email) {
      window.Email.send(config);
    }**/

    
    emailjs.sendForm(
      'service_mhjdlpb', 
      'template_2rob3ny', 
      form.current, 
      'rTofr_ZkYZVyFZ-4k'
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
 

  /**send email code end**/

        setUserData({
          Name: '', 
          Email: '', 
          PhoneNumber: '', 
          MsgContent: ''
        });
    
  }

  /** captcha value code**/
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
    //document.cookie = "SameSite=None; Secure";
  }
  

  /**validation code**/

  const validationRegex = {
    name: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    phoneNumber: /^(?:(?:\+|00)\d{1,3})?[0-9()\-\s]+$/,
  };

/** slide-in from right and left code **/

  const myTableRef = useFromRef();
  const myTableIsVisible = useForm();

  






//<div id='messageSent-text' className='' ref={sentText}>Message Sent</div>
  return (
    <>
    <section id='contact' className=''>
      <div id='contact-text' className='' >
        <h1>CONTACT ME</h1>
      </div>
      <div id='' className={`contact-form${myTableIsVisible ? "-active":""}`} style={{backgroundImage: `url(${slide})`}} ref={myTableRef}>
        <form ref={form} id='form' action="" method="POST">
            <input className='input' type="text" name="Name" value={userData.Name} placeholder="Name:" onChange={Data}></input>
            <input className='input' type="email" name="Email" value={userData.Email} placeholder="Email:" onChange={Data}></input>
            <input className='input' type="number" name="PhoneNumber" value={userData.PhoneNumber} placeholder="Mobile Number:" onChange={Data} ></input>
            <textarea className='textarea' name="MsgContent" value={userData.MsgContent} cols="35" rows="10" placeholder="How Can I Help You:" onChange={Data} ></textarea>
            <ReCAPTCHA sitekey="6LcQQtMnAAAAAJjQc8iIyFeAkwVM3GFPjtX7LZHz" onChange={onChange}/>
            <button type="submit" value="Send Message" id="submit" onClick={send}>Submit</button>
            
        </form> 
      </div>
      
    </section>
    <Footer/>
    </>
  )
}

export default Communication