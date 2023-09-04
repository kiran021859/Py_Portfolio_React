import React, {useContext, useRef, useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';


export const SlideContext = React.createContext();
export const SlideRefContext = React.createContext();
export const AboutContext = React.createContext();
export const AboutRefContext = React.createContext();

export function useSlide(){
    return useContext(SlideContext);
};

export function useSlideRef(){
    return useContext(SlideRefContext);
};




export function useAbout(){
    return useContext(AboutContext);
};

export function useAboutRef(){
    return useContext(AboutRefContext);
};



  
  export function SlideProvider({children}) {

    const mySlideRef = useRef();

    const [isVisible, setIsVisible] = useState();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      })
      observer.observe(mySlideRef.current)
    }, [] );

    const { ref: myAboutRef, inView: myAboutIsVisible } = useInView();


    return (
      <>
      <SlideContext.Provider value={isVisible}>
        <SlideRefContext.Provider value={mySlideRef}>

            <AboutRefContext.Provider value={myAboutRef}>
                <AboutContext.Provider value={myAboutIsVisible}>
                    {children}
                </AboutContext.Provider>
            </AboutRefContext.Provider>

        </SlideRefContext.Provider>    
      </SlideContext.Provider>  
      
      </>
    )
  }
  