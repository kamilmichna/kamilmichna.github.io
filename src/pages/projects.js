import React from 'react';
import styled from 'styled-components';
import pogodynkaImage from '../images/pogodynka.png'
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';

const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 4;
    color: #2892F4;
    grid-column: 5/9;
    font-size: 2.6em;
    font-weight: 900;
`
const Main = styled.div`
  grid-column: 1/13;
  grid-row: 4;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 5vh;
  grid-gap: 10vw;
  padding: 10vw;
  margin-bottom: 50vh;
  
`
const ProjectHeading = styled.h3`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: white;
    font-weight: 900;
`
const ProjectImage = styled.img`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
transform: scale(0.7);
`
const ProjectDescription = styled.p`
font-size: 2em;
color: white;
line-height: 1.5;
margin: 10px;
text-align: left;

`
const ProjectContainer = styled.article`
    diplay: flex;
    align-items: center;
    width: 100%;
    background-color: #2892F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 15vh;
    padding: 40px;
    box-sizing: border-box;
    height: 60vh;
    transition-duration: 0.5s;
    &:hover{
        transform: scale(1.20);
    }

`

const ProjectsPage = () => {
    return(
        <Layout pageTitle="Kamil Michna - posty">
        <Header></Header>
        <Heading>Zrealizowane przeze mnie projekty</Heading>     
        <Main>
            <a target="_blank" href='https://kamilmichna.github.io/pogodynka/'>
                <ProjectContainer>
                    <ProjectHeading>Pogodynka</ProjectHeading>
                    <ProjectImage src={pogodynkaImage}></ProjectImage>
                    <ProjectDescription>Aplikacja pozwalająca na sprawdzenie pogody w swojej okolicy, napisana w React z TypeScript oraz styled components. Do pobierania danych meteorologicznych wykorzystałem Open Weather API.</ProjectDescription>
                </ProjectContainer>
            </a>
            
        </Main>
        </Layout>
    )
}
export default ProjectsPage

