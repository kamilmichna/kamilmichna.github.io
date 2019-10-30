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
    .path{
        stroke-dasharray: 20;
    }

`

 const SVGLine = ()=>{

    return(
        <Line width="1414" height="4986" viewBox="0 0 1414 4986" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class='path' d="M1 3C659.469 187.018 1281.93 588.411 1397.5 882C1552.69 1276.23 -278.384 1152.12 286.957 1565.16C852.298 1978.2 1495.98 2263.73 1401.2 2512.75C1306.43 2761.78 -40.0858 2892.29 286.957 3156.82C614 3421.34 1712.36 4073.41 1190.3 4221.42C668.234 4369.44 29.4862 4606.96 651.799 4779.48C1149.65 4917.49 1295.66 4973.33 1306.43 4984" stroke="#0CC2FC" stroke-width="5"/>
</Line>



    );
}
export default SVGLine;