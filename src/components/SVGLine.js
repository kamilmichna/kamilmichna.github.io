import React from 'react';
import styled, {keyframes} from 'styled-components';

const moveLineDash = keyframes`
    to{
        stroke-dashoffset: -1000;
    }
`
const Line = styled.svg`
animation: 5s ${moveLineDash} linear infinite;
   width: 96vw;
   top: 50vh;
   height: auto;
   position: absolute;
   /* DISABLED ON MOBILE */
   @media screen and (max-width: 500px) {   
          display: none;
        }
    .path{
        stroke-dasharray: 20;
      
    }
    @media screen and (max-width: 600px) {
        width: 80vw;
   
    }
    

`

 const SVGLine = ()=>{

    return(
        <Line width="1440" height="3950" viewBox="0 0 1440 3950" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3C673.224 112.023 1308.69 349.832 1426.67 523.772C1585.1 757.335 -284.22 683.804 292.931 928.514C870.081 1173.22 1527.21 1342.39 1430.45 1489.93C1333.7 1637.46 -40.9441 1714.79 292.931 1871.51C626.806 2028.23 1748.11 2414.55 1215.14 2502.24C682.172 2589.94 -214.813 3103.33 420.5 3205.54C928.75 3287.31 1002.5 3940.68 1013.5 3947" stroke="#0CC2FC" stroke-width="5" stroke-dasharray="20 20"/>
</Line>


        



    );
}
export default SVGLine;