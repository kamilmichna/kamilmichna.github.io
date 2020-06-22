import styled from 'styled-components';
import { SectionContainer } from '../../components/Section/Section.styled';

export const HeroSection = styled(SectionContainer)`
    background-color: ${props => props.bright};
    height: 100vh;
    grid-template-rows: repeat(10,10vh);
    *{
        user-select: none;
    }
`

export const LogoType = styled.h1`
    background-color: ${props => props.bright};
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
    grid-row: 2/4;
    @media (min-width: 1810px){ 
        font-size: 200px;

    }
    @media (min-width: 1610px) and (max-width: 1809px){ 
        font-size: 170px;

    }
    @media (min-width: 1280px) and (max-width: 1609px){ 
        font-size: 140px;

    }
    @media (min-width: 1000px) and (max-width: 1281px){ 
        font-size: 110px;

    }
    @media (min-width: 331px) and (max-width: 999px){ 
        font-size: 70px;

    }
    @media (min-width: 260px) and (max-width: 330px){ 
        font-size: 55px;

    }
    @media (min-width: 1px) and (max-width: 259px){ 
        font-size: 40px;

    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1410px){ 
        font-size: 150px;

    }
    @media (min-width: 1221px) and (max-width: 1409px){ 
        font-size: 120px;

    }
    @media (min-width: 1070px) and (max-width: 1220px){ 
        font-size: 100px;

    }
    @media (min-width: 951px) and (max-width: 1070px){ 
        font-size: 85px;
        line-height: 100px;


    }
    @media (min-width: 806px) and (max-width: 950px){ 
        font-size: 65px;
        grid-row: 4/11;
        line-height: 100px;
        line-height: 100px;

    }
    @media (min-width: 151px) and (max-width: 805px){ 
        font-size: 45px;
        grid-row: 4/8;
        grid-column: 2/11;
        line-height: 20px;
        line-height: 100px;

    }
    
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