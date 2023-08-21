import React, { useEffect }  from 'react';
import './home.css';
import backgroundImage from '../../assets/pictures/fadeBackground.png';
import me from '../../assets/pictures/me.png';
import CV from '../../assets/cv/CV-for-portfolio.pdf';





function Home() {
  
  


  return (
    <>
      <section className='h-screen bg-repeat-x' id="homepage" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div id='block1' className='' >
          <div className='' id='home-text'>

              <h1>Kiran Isaacs</h1>
            
              <h2>Aspiring</h2>
            
              <h1>Software Developer</h1>
            
          </div> 
          <div className='' id='button'>                                                          {/*noopener: This relationship is used to prevent the linked document from having access to the window.opener object of the current document. This helps to mitigate security risks, particularly with regards to cross-site scripting (XSS) attacks. If the linked document is opened with window.open, using noopener prevents the linked document from manipulating the originating page.*/} 
          <a href={CV} target="_blank" rel="noopener noreferrer"><h1>Download CV</h1></a>         {/*noreferrer: This relationship instructs the browser not to send the Referer header when the link is followed. The Referer header typically contains information about the URL of the page that referred the user to the current page. By using noreferrer, you can prevent the linked site from knowing the exact URL of the page that linked to it.*/}
          </div>                                                                                  {/*target="_blank" indicates that the linked document should open in a new browsing context or tab, typically in a new browser window. The _blank value for the target attribute ensures that the linked content opens in a new tab or window, separate from the current page. Putting it all together, the <a> tag in your example is creating a link that, when clicked, will open the document referred to by the {CV} placeholder in a new browser tab/window. The rel attribute is specifying the relationships between the documents to improve security, and the target attribute is determining how the linked content is displayed to the user.*/}
        </div>

        <div id='block2' className=''>
          <div id='Home-Picture' className='w-full h-full rounded-2xl bg-center bg-cover duration-500 group' style={{backgroundImage: `url(${me})`}}></div>
        </div>
      </section>
    </>
  )
}

export default Home