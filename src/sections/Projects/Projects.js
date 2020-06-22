import React, { useEffect,useRef } from "react";
import gsap from "gsap"; 
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import {ProjectsSection,Header,ProjectsContainer,ProjectCard,GithubLink} from './Projects.styled';
import Button from '../../components/Button/Button';
import projectComponents from '../../configs/projectsComponents';
const Technology = (props) => {
    const headerRef = useRef(null);
    useEffect(()=>{
        if (typeof window !== 'undefined'){
            const controller = new ScrollMagic.Controller();
            ScrollMagicPluginGsap(ScrollMagic, gsap);
            new ScrollMagic.Scene({
                triggerElement: headerRef.current,
                reverse: false
            }).setTween(
                gsap.from(".project__card", 1, {
                    scale: 0.2, 
                    opacity: 0,
                    y: 200,
                    yoyo: true, 
                    repeat: 0, 
                    ease: "power1.inOut",
                    delay:0,
                    stagger: {
                      amount: 1, 
                      grid: "auto",
                      from: "left"
                    }
                })
            ).addTo(controller);
        }
      
    },[])
    let projects = [];
    projects = projectComponents.map((el)=>{
        return(<ProjectCard target='_blank' href={el.link} rel="noopener" className='project__card'>
            <h4 className='card__title'>{el.name}</h4>
            <p className='card__description'>{el.description}</p>
        </ProjectCard>)
    });
    return(
       <ProjectsSection>
           <Header ref={headerRef}>PROJ</Header>
           <Header>ECTS</Header>
           <ProjectsContainer>
               {projects}
           </ProjectsContainer>
           <GithubLink href='https://github.com/kamilmichna?tab=repositories' rel="noopener" target='_blank'>See more on GitHub</GithubLink>
       </ProjectsSection>
   )
}
export default Technology;