import styled, { keyframes } from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';
export const TimeLineSection = styled(SectionContainer)`
    background-color: #1B1B1B;
    height: 100vh;
    position: relative;
    z-index: 1;
    grid-template-rows: repeat(10,10vh);
    .button--prev{
        grid-row: 9;
        grid-column: 2;
    }
    .button--next{
        grid-row: 9;
        grid-column: 3;
    }
    *{
        user-select: none;
    }
`
const animateText = keyframes`
    0% {
        text-shadow: 5px 5px #15A873;
    }
    50%{
        text-shadow: 100px 6px #15A873;
    }
    100% {
        text-shadow: 5px 5px #15A873;
    }
`
export const Time = styled.p`
    grid-column: 2/9;
    grid-row: 1/3;
    font-weight: 900;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
    color: #fff;
    font-size: 150px;
    letter-spacing: 20px;
    text-shadow: 5px 5px #15A873;

    /* animation: ${animateText} 0.5s linear infinite; */
`
// export const Line = styled(Time)`
// display: block;
//     grid-column: 1;
//     grid-row: 3/8;
//     writing-mode: vertical-rl;
//     justify-content: flex-end;
// `
export const CardsContainer = styled.div`
    position: absolute;
    width: auto;
    grid-row: 1/7;
    display: flex;
    justify-content: center;
    height: 50vh;
    top: 25vh;

`
export const Counter = styled.p`
 display: flex;
 justify-content: center;
 align-items: center;
 grid-column: 4;
 grid-row: 9/10;
 font-weight: 900;
 color: white;
`