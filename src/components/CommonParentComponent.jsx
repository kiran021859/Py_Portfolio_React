// CommonParentComponent.js
import React, { useState } from 'react';
import Navbar from './1.Navbar/navbar'; // Import your Navbar component
import AboutMe from './3.AboutMe/AboutMe.1';

function CommonParentComponent() {
  const [myAboutIsVisible, setMyAboutIsVisible] = useState(false);

  return (
    <>
      <Navbar myAboutIsVisible={myAboutIsVisible} /> 
      <AboutMe setMyAboutIsVisible={setMyAboutIsVisible} />
    </>
  );
}

export default CommonParentComponent;