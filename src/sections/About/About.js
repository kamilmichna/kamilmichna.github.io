import React, { useEffect, useRef } from "react";
import { AboutSection } from './About.styled';
import gsap from "gsap"; 
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// import ScrollAnimation from 'react-animate-on-scroll';
const About = (props) => {
    const aboutText = useRef(null);
    const controller = new ScrollMagic.Controller();
    const tl = gsap.timeline();
    useEffect(()=>{
        ScrollMagicPluginGsap(ScrollMagic, gsap);
        new ScrollMagic.Scene({
            triggerElement: aboutText.current,
            reverse: false
        }).setTween(tl.from(aboutText.current,1,{
            opacity: 0
        })).addTo(controller);
    },[controller,tl])
    return (
        <AboutSection>
            <p ref={aboutText}>My name is Kamil Michna and Im 18 years old frontend & backend developer from Krosno, Poland. Its pleasure to <br></br>
                ⚡⚡⚡ See You here!  ⚡⚡⚡</p>
        </AboutSection>
    )
}
export default About;