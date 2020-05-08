import styled from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';

export const HeroSection = styled(SectionContainer)`
    background-color: ${props=>props.bright};
    height: 100vh;
    grid-template-rows: repeat(10,10vh);
    *{
        user-select: none;
    }
`

export const LogoType = styled.h1`
    background-color: ${props=>props.bright};
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 30px;
` 
export const WakeUp = styled.h2`
    grid-column: 1/11;
    color: ${props => props.theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 200px;
    grid-row: 2/4;
`
export const DarkBlock = styled.div`
    grid-column: 2/11;
    grid-row: 4/11;
    background-color: ${props => props.theme.dark};
`
export const WhiteText = styled.h3`
    grid-column: 2/8;
    grid-row: 4/11;
    font-size: 150px;
    color: white;
    z-index: 99999;
    font-weight: 900;
    padding-left: 100px;
    padding-right: 100px;
    line-height: 200px;
`
export const GoDown = styled.p`
    writing-mode: vertical-lr;
    grid-column: 1;
    grid-row:5/11;
    transform: rotate(180deg);
    padding: 10px;
    font-weight: 700;
    font-size: 25px;
`