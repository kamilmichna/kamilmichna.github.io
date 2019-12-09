import React from 'react';
import styled, {keyframes} from 'styled-components';

const moveBall = keyframes`
    0%{
        left: -50%;
            bottom: 0%; 
            z-index: 3;
    }
  50%{
      left: 100%;
      bottom: 60%;
  }
  99%{
    left: -50%;
    bottom: 0%;
       
          
  }
  100%{
    z-index: -2;
  }

`
const Wrapper = styled.span`
    position: absolute;
    top: 30vh;
    left: 0px;
    height: 20vw;
    width: 20vw;
    @media screen and (max-width: 600px) {
    
  /* grid-template-columns: repeat(3,1fr) !important; */
  height: 60vw;
    width: 60vw;
    left: 10px;
    top: 40vh;
  }
    
`
const Container = styled.div`
margin: 10vw;
position: relative;
 width: 100%;
height: 100%;
z-index: 3;
grid-row: 1/3;
  grid-column: 1/13;
  @media screen and (max-width: 500px) {
       /* DISABLED ON MOBILE */
          display: none;
        }

`
const Bigger = styled.svg`
    position: absolute;
    top: 0px;
    left:0px;
    width: 100%;
    height: 100%;
    
    z-index: 1;
`
const Smaller = styled.svg`
animation: 10s ${moveBall} linear infinite;
    width: 50%;
    height: 50%;
    position: absolute;
    left: -50%;
    bottom: 0%;
    z-index: 2;
    @media screen and (max-width: 600px) {
  /* grid-template-columns: repeat(3,1fr) !important; */
  animation: none;
  width: 70%;
    height: 70%;
    
  }
`
 const SVGBalls = ()=>{

    return(
        <Wrapper>
        <Container>
        <Bigger width="10" height="10" viewBox="0 0 376 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="188" cy="184" r="184" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="376" height="376" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="188" y1="0" x2="188" y2="368" gradientUnits="userSpaceOnUse">
<stop stop-color="#0CC2FC"/>
<stop offset="0.9999" stop-color="#1A06FF"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
</linearGradient>
</defs>
</Bigger>
<Smaller width="10" height="10" viewBox="0 0 376 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="188" cy="184" r="184" fill="url(#paint0_linear)"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="376" height="376" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="188" y1="0" x2="188" y2="368" gradientUnits="userSpaceOnUse">
<stop stop-color="#0CC2FC"/>
<stop offset="0.9999" stop-color="#1A06FF"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
</linearGradient>
</defs>
</Smaller>
</Container>
</Wrapper>

    );
}
export default SVGBalls;