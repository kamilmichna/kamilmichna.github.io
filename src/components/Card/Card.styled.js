import styled from 'styled-components';
export const CardContainer = styled.div`
    color: white;
    background-color: #000;
    margin-left: 10vw;
    width: 50vw;
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(10,1fr);
    height: 100%;
`
export const Title = styled.h3`
    grid-column: 1/9;
    grid-row:2/4;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
`
export const Content = styled.p`
    grid-column: 2/11;
    grid-row:4/11;
    padding: 40px;
    line-height: 1.5;
    font-size: 20px;
`
export const StartDate = styled.p`
    display: flex;
    align-items:flex-end;
    grid-column: 1;
    grid-row:5/8;
    writing-mode: vertical-rl;
    padding: 20px;
    font-weight: 700;
`
export const EndDate = styled.p`
   display: flex;
    align-items:flex-end;
    grid-column: 1;
    grid-row:8/11;
    writing-mode: vertical-rl;
    padding: 20px;
    font-weight: 700;
`