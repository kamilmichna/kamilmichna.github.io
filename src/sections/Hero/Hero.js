import React, { useEffect,useRef } from "react";
import {HeroSection,GoDown,LogoType,WakeUp,WhiteText, DarkBlock} from './Hero.styled';
import gsap from 'gsap';

const Hero = (props) => {
    const darkBlock = useRef(null);
    const wakeUp = useRef(null);
    const goDown = useRef(null);
    const tl = gsap.timeline();
    useEffect(()=>{
        tl.from(wakeUp.current,1,{
            x: '200vw',
        ease: "expo.out"
    })
        tl.from(darkBlock.current,1,{
            x: '200vw',
            ease: "expo.out"
        });
        tl.from(goDown.current,1,{
            y: '200vw',
            ease: "expo.out"
        })

    },[tl])
    return(
            <HeroSection>
                <LogoType>
                <svg width="81" height="36" viewBox="0 0 81 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="36" width="43" height="19" fill="black"/>
                <rect y="19" width="36" height="17" fill="black"/>
                <path d="M15.984 20.072L9.84 26.312V35H5.04V1.4H9.84V20.168L28.08 1.4H33.552L19.2 16.52L34.464 35H28.848L15.984 20.072ZM70.692 35L70.644 10.52L58.5 30.92H56.292L44.148 10.664V35H39.54V1.4H43.476L57.492 25.016L71.316 1.4H75.252L75.3 35H70.692Z" fill="black"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="1" width="71" height="34">
                <path d="M15.984 20.072L9.84 26.312V35H5.04V1.4H9.84V20.168L28.08 1.4H33.552L19.2 16.52L34.464 35H28.848L15.984 20.072ZM70.692 35L70.644 10.52L58.5 30.92H56.292L44.148 10.664V35H39.54V1.4H43.476L57.492 25.016L71.316 1.4H75.252L75.3 35H70.692Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="32.5" y="-0.5" width="50" height="19" fill="white" stroke="black"/>
                <rect x="3" y="19" width="33" height="17" fill="white"/>
                </g>
                </svg>
                </LogoType>
                <WakeUp ref={wakeUp}> Wake Up Samurai</WakeUp>
                <DarkBlock ref={darkBlock} ></DarkBlock>
                <WhiteText>We have websites to build</WhiteText>
                <GoDown ref={goDown}>GO DOWN TO SEE MORE</GoDown>
            </HeroSection>
    )
}

export default Hero
