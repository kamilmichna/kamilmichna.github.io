import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width:80px;
    background: linear-gradient(89.03deg, #0CC2FC -9.44%, #1A06FF 227.01%);
    height: 40px;
    position: relative;
    border-radius: 1000px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    @media screen and (max-width: 600px) {
        transform: scale(0.8);
    }
    &:hover{
        cursor: pointer;
    }
`
const Circle = styled.div`
position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    transition-duration: 0.5s;
    &.circle--left{
        right: 40px;
        left: 0px;
        transition-duration: 0.5s;
    }
    &.circle--right{
        left: 40px;
        right: 0px;
        transition-duration: 0.5s;
    }
    
`
const Text = styled.p`
    color: white;
    position: absolute;
    font-size: 1.2em;
    font-weight: 900;
    z-index: 999999;
    width: 50%;
    transition-duration: 0.5s;
    color: #ebebeb;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        font-size: 3em !important;
}
    &.text--active{
        color: #000;
    }
    &.text--left{
        left: 0px;
    }
    &.text--right{
        right: 0px;
    }

`
const SwitchButton = (props) => {
    const [state,setState] = useState('en');
    const onSwitchClick = () => {
        if (state === 'pl'){
            setState('en')
        }
        else if (state === 'en'){
            setState('pl');
        }
        else throw new Error();
    }
    useEffect(()=>{
        props.onSwitchChange(state);
    },[state, props])
    return(
        <Container  onClick={onSwitchClick}>
            <Text className={`text--right ${(state === 'pl' ? 'text--active' : '')}`} id='options_first'>ENG</Text>
            <Circle className={`${(state === 'en' ? 'circle--left' : 'circle--right')}`}></Circle>
            <Text className={`text--left ${(state === 'en' ? 'text--active' : '')}`}  id='option_second'>PL</Text>
        </Container>
    )
}


export default SwitchButton;
