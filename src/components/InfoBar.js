import React, { useState } from 'react';
import styled from 'styled-components';

const InfoBarContainer = styled.div`
    width: 100vw;
    min-height: 40px;
    background: linear-gradient(90.9deg, #0CC2FC -48.73%, #1A06FF 138.85%, rgba(12, 194, 252, 0) 138.87%);
    position: fixed;
    display: none;
    bottom: 0px !important;
    z-index: 9999999999;
    box-shadow: 0 -14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    &.--active{
        display: fixed;
    }
    @media screen and (max-width: 1100px)  and (min-width: 601px){
        min-height: 60px;
    }
    @media screen and (max-width: 600px){
        height: 80px;
      
       
    }

`
const CloseButton = styled.button`
    position: fixed;
    bottom: 5px;
    height: 30px;
    right: 10px;
    font-size: 2em;
    border: 0px;
    background-color: rgba(0,0,0,0);
    color: white;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1100px)  and (min-width: 601px){
        height: 60px;
        bottom: 0px;
    }
    @media screen and (max-width: 600px){
        height: 80px;
        padding: 0px;
        font-size: 3em;
       
    }
    &:hover{
        cursor: pointer;
    }
`
const Info = styled.p`
    position: fixed;
    bottom: 0px;
    height: 40px;
    max-width: 80%;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media screen and (max-width: 1100px) and (min-width: 601px) {
        min-height: 60px;
    }
    @media screen and (max-width: 600px){
        font-size: 2.5em;
        max-width: 90%;
        height: 80px;
        line-height: 1.5;
    }
    font-size: 1.5em;
`
 const InfoBar = (props) => {
    const [isVisible,setIsVisible] = useState(true);
    const toggleInfoBar = ()=>{
        setIsVisible(!isVisible);
    }
    return(
        <InfoBarContainer className={isVisible ? '--active' : ''}>
            <Info>Cześć! Ta strona wykorzystuje cookies do badania aktywności użytkowników w Google Analytics. Przebywając tutaj wyrażasz na to zgodę.</Info>
            <CloseButton  onClick={toggleInfoBar} >X</CloseButton>
        </InfoBarContainer>
    )
 }

 export default InfoBar;