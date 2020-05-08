import styled from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';

export const TechnologySection = styled(SectionContainer)`
    position: relative;
    background-color: #1B1B1B;
    height: 170vh;
    grid-auto-rows:10vh;
    *{
        user-select: none;
    }
`
export const AsideParagraph = styled.p`
    color: #fff;
    position: absolute;
    background-color: #000;
    font-size: 80px;
    padding: 20px;
    writing-mode: vertical-lr;
    grid-column: 10;
    display: flex;
    align-items: flex-start;
    grid-row: 2/10;
    transform: translateY(-250px) rotate(180deg);
    z-index: 99999;
    color: #fff;
    font-weight: 900;
    
`
export const TechnologyContainer = styled.div`
    background-color: #fff;
`
export const BackendTechnologyContainer = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 5/9;
    grid-row: 4/10;
     > p {
         background-color: #fff;
         padding: 20px;
        font-size: 36px;
        font-weight: 900;
        color: #000;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
    li:nth-of-type(3) svg{
        transform: translateX(25px);
    }
`
export const WantToLearn = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 1/11;
    grid-row: 15;
     > p {
         /* background-color: #fff; */
         padding: 20px;
        font-size: 36px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
    p:nth-of-type(2){
        font-size: 25px;
    }
`
export const DatabasesTechnologyContainer = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 5/10;
    grid-row: 10/15;
     > p {
         /* background-color: #fff; */
         padding: 20px;
        font-size: 36px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
`
export const OtherTechnologyContainer = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 1/5;
    grid-row: 10/15;
     > p {
         background-color: #fff;
         padding: 20px;
        font-size: 36px;
        font-weight: 900;
        color: #000;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
`
export const FrontendTechnologyContainer = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 1/5;
    grid-row: 4/10;
     > p {
        font-size: 36px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
`

export const ExportTechnologyContainer  = styled(TechnologyContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    grid-column: 1/5;
    grid-row: 4/10;
     > p {
        font-size: 36px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        height: 80%;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 36px;
        text-align: left;
        padding-right: 200px;
        padding-left: 40px;
        margin: 20px;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
`

export const TechnologyStack = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    grid-column: 1/5;
    grid-row: 3/4;
    font-size: 60px;
    color: #fff;
    position: relative;
    font-weight: bold;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        left: -30%;
        content: 'asd';
        background-color: #fff;
        mix-blend-mode: difference;
    }
`