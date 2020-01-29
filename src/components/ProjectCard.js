import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import i18n from '../configs/i18n'
const ProjectCardContainer = styled.div`
    z-index: 999999999999;
    width: 17vw;
    height: 60vh;
    top: 3000px;
    left: 100px;
    background-color: #F4F4F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 500px) {
        width: 90vw;
        margin: 20px;
        box-sizing: border-box;
        height: 40vh;
            
    }
    border-radius: 10px;
`
const ProjectCardBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    color: white;
    width: 100%;
    height: 15%;
    background: linear-gradient(90deg, #0CC2FC -22.69%, #1A06FF 149.25%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px 10px 0px 0px ;
`
const ProjectCardText = styled.p`
display: flex;
justify-content: center;
align-items: center;

    width: 100%;
    font-size: 2em;
    text-align: left;
    padding: 5%;
    box-sizing: border-box;
    line-height: 1.5;
    height: 65%;
    @media screen and (max-width: 500px) {
        font-size: 2.5em;
            
    }
`
const ProjectCardButtonContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & .button_container{ 
        width: 90%;
        height: 70%;
        @media screen and (max-width: 500px) {
            * {
                font-size: 3em;
            }
        }

    }
   
`
const ProjectCard = (props) => {
    return(
        <ProjectCardContainer>
            <ProjectCardBanner>{props.title}</ProjectCardBanner>
            <ProjectCardText>{props.text }</ProjectCardText>
            <ProjectCardButtonContainer>
                <div className='button_container'>
                    <Button isBlank to={props.to} >{props.thisSite ? i18n.t('projects.thisSite') : i18n.t('projects.button')  }</Button>
                </div>
            </ProjectCardButtonContainer>
        </ProjectCardContainer>
    )
}

export default ProjectCard;