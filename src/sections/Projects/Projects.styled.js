import styled from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';
import { ButtonContainer } from '../../components/Button/Button.styled';
export const ProjectsSection = styled(SectionContainer)`
    background-color: #fff;
    height: 100vh;
    grid-template-rows: repeat(10,10vh);
    z-index: 1;
`
export const GithubLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #000;
    font-size: 20px;
    color: white;
    font-weight: 700;
    grid-row: 4;
    z-index: 999;
        grid-column: 2/4;
        font-size: 15px;
        transition-duration: 0.25s;
        margin: 0px;
        margin-right: 20px;
        margin-top: 20px;
        &:hover{
            background-color: white;
            color: black;
        }
    
`
export const Header = styled.h3`
    font-size: 100px;
    font-weight: 900;
    color: #1B1B1B;
    grid-row: 2;
    grid-column: 2/4;
    &:nth-of-type(2){
        grid-row:3;
    }
`
export const ProjectsContainer = styled.div`
    grid-column: 4/10;
    grid-row:2/10;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 20px;

`
export const ProjectCard = styled.a`
display: flex;
/* justify-content: center; */
text-decoration: none;
color: white;
align-items: center;
flex-direction: column;
padding: 40px;
box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #1B1B1B;
    transition-duration: 0.5s;
    .card__title{
        margin: 40px;
    }
    .card__description{
        line-height: 1.5;
    }
    &:hover{
        background-color: white;
        color: black;
        box-shadow: 0px 5px #1B1B1B;
    }
`
