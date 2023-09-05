import React, { useEffect }  from 'react';
import './home.css';
import backgroundImage from '../../assets/pictures/fadeBackground.png';
import me from '../../assets/pictures/me.png';
import CV from '../../assets/cv/CV-for-portfolio.pdf';
//style={{backgroundImage: `url(${backgroundImage})`}}





function Home() {
  
  const apiKey = import.meta.env.VITE_S3_BUCKET;

  


  return (
    <>
      <section className='h-screen' id="homepage" >
          <div className='title' id=''>
              <h1>Kiran Isaacs</h1>
              <h1>Software Developer</h1>
          </div>                                                                                 {/*target="_blank" indicates that the linked document should open in a new browsing context or tab, typically in a new browser window. The _blank value for the target attribute ensures that the linked content opens in a new tab or window, separate from the current page. Putting it all together, the <a> tag in your example is creating a link that, when clicked, will open the document referred to by the {CV} placeholder in a new browser tab/window. The rel attribute is specifying the relationships between the documents to improve security, and the target attribute is determining how the linked content is displayed to the user.*/}
      </section>
    </>
  )
}

export default Home