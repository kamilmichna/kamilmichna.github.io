import React from "react";
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import heroSvgImage from '../images/heroSvgImage.svg';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';
import instagram from '../images/icons/instagram.svg';
import ModalBubble from '../components/ModalBubble/ModalBubble';
const HeroImage = styled.img`
  width: 100%;
  grid-column: 6/11;
  grid-row: 5;
  @media (max-width: 800px){
    display: none;
}
`
const ContactTriangle = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 10vw;
  height: 10vw;
  background: #2892F4;
  -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1vw;
  color: white;
  box-sizing: border-box;
  font-size: 2em;
  font-weight: bold;
  transition-duration: 0.5s;
  
  & *{
    transition-duration: 0.5s;
  }
  &:hover{
    width: 20vw;
    height: 20vw;
    -webkit-clip-path: ellipse(100% 100% at 100% 100%);
    clip-path: ellipse(100% 100% at 100% 100%);
    padding: 2vw;
  }
  &:hover > p{
    opacity: 0;
    cursor:default;
  }
  &:hover .SocialIconsContainer{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 5px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`
const SocialIconsContainer = styled.div`
  display: none;
  width: 10vw;
  height: 10vw;
  & img{
    fill: white;
    max-width: 80%;
  }

  & img:hover{
    cursor: pointer;
    transform: scale(1.5);
    
  }


`
const AboutMeHeader = styled.h2`
  grid-column:2/6;
  grid-row: 5;
  font-size: 3em;
  font-weight: 900;
  color: #2892F4;
  @media (max-width: 800px){
    grid-column:2/11;
}
`
const AboutMeContent = styled.p`
  margin-top: 5vh;
  grid-column:2/6;
  grid-row: 6/8;
  font-size: 2em;
  font-weight: 500;
  line-height: 1.5;
  color: #2892F4;
  @media (max-width: 800px){
    grid-column:2/11;
}
`

const IndexPage = () => (
  <Layout pageTitle="Kamil Michna - początkujący webdeveloper">
      <Header/>
      <HeroImage src={heroSvgImage}/>
      <ModalBubble/>
      <AboutMeHeader>Cześć, nazywam się Kamil Michna i sporo programuję</AboutMeHeader>
      <AboutMeContent>Jestem uczniem technikum informatycznego. W wolnym czasie zajmuje się tworzeniem stron internetowych,  programowaniem po stronie serwera (node.js), oraz nieco rzadziej pisaniem prostych programów w Pythonie. Używam także technologii takich jak React, bazy danych mongoDB oraz bazy SQL, coraz częściej zajmuję się też projektowaniem designu strony. Znam także podstawy języka C++ oraz Javy i PHP.</AboutMeContent>
      <ContactTriangle>
        <p>Social Media</p>
        <SocialIconsContainer className="SocialIconsContainer">
          <a title="Link do Instagrama" href="https://www.instagram.com/kamil.michna28/" rel="noopener noreferrer" target="_blank"><img alt="instagram icon" src={instagram}/></a>
          <a title="Link do Linkedin" href="https://www.linkedin.com/in/michnakamil/" rel="noopener noreferrer" target="_blank"><img alt="linkedin icon" src={linkedin}/></a>
          <a title="Link do mojego Githuba" href="https://github.com/kamilmichna" rel="noopener noreferrer" target="_blank"><img alt="github icon" src={github}/></a>
        </SocialIconsContainer>
      </ContactTriangle>
  </Layout>
)

export default IndexPage
