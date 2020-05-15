import styled from 'styled-components';
export const CursorContainer = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* background-color: red; */
    pointer-events: none;
    z-index: 9999999;
    border: 5px solid black;
    backdrop-filter: invert(100%);
    mix-blend-mode: difference;
`