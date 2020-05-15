import styled from 'styled-components';
export const ButtonContainer = styled.button`
    margin: 15px;
    box-sizing: border-box;
    font-weight: 900;
    position: relative;
    border: 0px;
    &:hover{
        &::before{
            left: 10px;
            top:10px;
            background-color: #15A873;
        }
    }
    &::before{
        transition-duration: 0.5s;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 5px;
        top:5px;
        background-color: #444444;
        z-index: -1;
    }
`