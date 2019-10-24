import React from 'react';
import styled from 'styled-components';
import close from '../../images/icons/close.svg';
import cookie from '../../images/icons/cookie.svg';
const BubbleContainer = styled.div`
    position: absolute;
    min-height: 15vh;
    height: auto;
    padding: 20px;
    min-width: 30vw;
    width: auto;
    background: #2892F4;
    border-radius: 10px;
    grid-column: 2/6;
    margin-bottom: 5vh;
    transition-duration: 1s;
    bottom: 2vh;
    left: 2vw;
    opacity: 1;
    @media (max-width: 1000px){
        min-width: 60vw;
    }
    @media (max-width: 800px){
        display:flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        
    }
    &::after{
        content: '';
        width: 7vw;
        height: 5vw;
        background: #2892F4;
        position: absolute;
        bottom: -2vw;
        left: 0px;
        -webkit-clip-path: polygon(0 0, 0% 100%, 45% 0);
        clip-path: polygon(0 0, 0% 100%, 45% 0);
        z-index: -9999;
    }
    & .closeIcon{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        @media (max-width: 800px){
            position: absolute;
            left: 40vw;
            top: 70vh;
            width: 20vw;
           
        }
    }
    & .cookieIcon{
        height: 10vw;
        z-index: 9999999;
        @media (max-width: 800px){
            opacity: 0;
           
        }
        

    }
    & .closeIcon:hover{
        transform: scale(1.25);
        cursor: pointer;
    }
    & .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
        position: absolute;
        right: 0px;
        flex-direction: column;
        @media (max-width: 600px){
            position: static;
            width: 90%;
        }
    }
`
const ModalBubbleHeader = styled.p`
    font-size: 2em;
    font-weight: 900;
    text-align: left;
    color: white;
    margin: 10px;
    @media (max-width: 800px){
        font-size: 3em;
    }
`
const ModalBubbleContent = styled.p`
    text-align: left;
    font-size: 1.5em;
    font-weight: 900;
    margin: 20px;
    line-height: 1.5;
    color: white;
    @media (max-width: 800px){
        font-size: 1.5em;
        margin: 0px;
    }
`
const ModalBubble = () => {
    const closeModal = () =>{
        document.querySelector('#bubbleModalContainer').style.opacity = "0";
        window.setTimeout(() => document.querySelector('#bubbleModalContainer').style.display = "none",1000)
    }

    return(
        <BubbleContainer id="bubbleModalContainer">
            <div className="wrapper">
                <ModalBubbleHeader>Hej ty, lubisz może ciasteczka?</ModalBubbleHeader>
                <ModalBubbleContent>Bo ta strona tak, i to bardzo! Wykorzystuje je głównie do zbierania informacji o ruchu użytkowników, a korzystając z niej zgadzasz się na to. Bez obaw jednak - dane przesyłane są jedynie do Google Analytics.</ModalBubbleContent>
            </div>
            <img alt="close modal icon" src={close} className="closeIcon" onClick={closeModal}/>
            <img alt="cookie icon" src={cookie} className="cookieIcon"/>
        </BubbleContainer>
    )
}

export default ModalBubble;
