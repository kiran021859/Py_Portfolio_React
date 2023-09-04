import React, {useContext, useRef, useState, useEffect} from 'react'



export const SlideContext = React.createContext();
export const SlideRefContext = React.createContext();

export function useSlide(){
    return useContext(SlideContext);
};

export function useSlideRef(){
    return useContext(SlideRefContext);
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


    return (
      <>
      <SlideContext.Provider value={isVisible}>
        <SlideRefContext.Provider value={mySlideRef}>
            {children}
        </SlideRefContext.Provider>    
      </SlideContext.Provider>  
      
      </>
    )
  }
  