import styled from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';

export const AboutSection = styled(SectionContainer)`
    background-color: ${props=>props.dark};
    height: 60vh;
    grid-template-rows: repeat(10,10vh);
    p{
        grid-row: 1/6;
        grid-column: 2/10;
        font-size: 36px;
        font-weight: 900;
        display: flex;
        justify-content: center;
        line-height: 1.5;
        align-items: center;
        height: 100%;
        opacity: 1;
        text-align: center;
    }
    *{
        user-select: none;
    }
`
