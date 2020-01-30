import React from 'react';
import styled from 'styled-components';


const ButtonContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #0CC2FC -20.85%, #1A06FF 125.12%);
    border: 0px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
    font-weight: 900;
    font-size: 1.5em;
    transition-duration: 0.5s;
    &:hover{
        border: 1px solid #1A06FF;
        background: none;
        background-color: white;
        color: #1A06FF;
        cursor: pointer;
    }
    @media screen and (max-width: 1100px){
        background-color: white;
        color: rgba(0,0,0,0.6);
        background: none;
        box-shadow: none;
        height: 10vh;
        font-size: 3em !important;
            &:hover{
            border: none;
            color: #0CC2FC;
            cursor: pointer;
        }
    }

`

 const Button = (props) => {

    return(
        <ButtonContainer onClick={props.toggleNav} target={props.isBlank ? '_blank' : '_self' } href={props.to}>{props.children}</ButtonContainer>
    )
 }

 export default Button;