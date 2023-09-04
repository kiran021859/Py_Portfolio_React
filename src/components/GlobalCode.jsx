import React, { useContext, useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


//export const SlideContext = React.createContext();
//export const SlideRefContext = React.createContext();




/** export about slide context**/
export const AboutContext = React.createContext();
export const AboutRefContext = React.createContext();
/** export Skills slide context**/
export const SkillsContext = React.createContext();
export const SkillsRefContext = React.createContext();
/** export Projects slide context **/
export const ProjectsContext = React.createContext();
export const ProjectsRefContext = React.createContext();
/** export Form slide context **/
export const FormContext = React.createContext();
export const FormRefContext = React.createContext();
/** export Icons slide context **/
export const IconsContext = React.createContext();
export const IconsRefContext = React.createContext();



/**export function useSlide(){
    return useContext(SlideContext);
};

export function useSlideRef(){
    return useContext(SlideRefContext);
};**/





/** about slide hooks **/

export function useAbout() {
    return useContext(AboutContext);
};

export function useAboutRef() {
    return useContext(AboutRefContext);
};

/** Skills slide hooks**/

export function useSkills() {
    return useContext(SkillsContext);
};

export function useSkillsRef() {
    return useContext(SkillsRefContext);
};

/** Projects slide hooks**/
export function useProjects() {
    return useContext(ProjectsContext);
};

export function useProjectsRef() {
    return useContext(ProjectsRefContext);
};

/** Form slide hooks**/


export function useForm() {
    return useContext(FormContext);
};

export function useFromRef() {
    return useContext(FormRefContext);
};
/** Icons slide hooks**/


export function useIcons() {
    return useContext(IconsContext);
};

export function useIconsRef() {
    return useContext(IconsRefContext);
};


export function SlideProvider({ children }) {

    /**const mySlideRef = useRef();

    const [isVisible, setIsVisible] = useState();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      })
      observer.observe(mySlideRef.current)
    }, [] );  **/

    const { ref: myAboutRef, inView: myAboutIsVisible } = useInView();
    const { ref: mySkillsRef, inView: mySkillsIsVisible } = useInView();
    const { ref: myProjectsRef, inView: myProjectsIsVisible } = useInView();
    const { ref: myFormRef, inView: myFormIsVisible } = useInView();
    const { ref: myIconsRef, inView: myIconsIsVisible } = useInView();


    return (
        <>
            <AboutContext.Provider value={myAboutIsVisible}>
                <AboutRefContext.Provider value={myAboutRef}>
                    <SkillsContext.Provider value={mySkillsIsVisible}>
                        <SkillsRefContext.Provider value={mySkillsRef}>
                            <ProjectsContext.Provider value={myProjectsIsVisible}>
                                <ProjectsRefContext.Provider value={myProjectsRef}>
                                    <FormContext.Provider value={myFormIsVisible}>
                                        <FormRefContext.Provider value={myFormRef}>
                                            <IconsContext.Provider value={myIconsIsVisible}>
                                                <IconsRefContext.Provider value={myIconsRef}>
                                                    {children}
                                                </IconsRefContext.Provider>
                                            </IconsContext.Provider>
                                        </FormRefContext.Provider>
                                    </FormContext.Provider>
                                </ProjectsRefContext.Provider>
                            </ProjectsContext.Provider>
                        </SkillsRefContext.Provider>
                    </SkillsContext.Provider>
                </AboutRefContext.Provider>
            </AboutContext.Provider>
        </>
    )
}
