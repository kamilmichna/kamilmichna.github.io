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
                <LogoType>KM</LogoType>
                <WakeUp ref={wakeUp}> Wake Up Samurai</WakeUp>
                <DarkBlock ref={darkBlock} ></DarkBlock>
                <WhiteText>We have websites to build</WhiteText>
                <GoDown ref={goDown}>GO DOWN TO SEE MORE</GoDown>
            </HeroSection>
    )
}

export default Hero
