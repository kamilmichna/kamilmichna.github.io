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

`

 const Button = (props) => {

    return(
        <ButtonContainer target={props.isBlank ? '_blank' : '_self' } href={props.to}>{props.children}</ButtonContainer>
    )
 }

 export default Button;