import React, {useState, useEffect} from 'react'
import './footer.css';
import Background from '../../assets/pictures/footer2.png';
import {AiOutlineArrowUp} from 'react-icons/ai'


function Footer() {
  

  const [footerId, setFooterId] = useState('footer');
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFooterId('footer1');
    } else {
      setFooterId('footer');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      
        <div className={footerId}>
          <a className='' id='footer-button' href="#homepage"><AiOutlineArrowUp size='30'/></a>
        </div>
      
    </>
  )
}

export default Footer