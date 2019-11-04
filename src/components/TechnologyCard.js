import React from 'react';
import styled from 'styled-components';

const TechnologyCardContainer = styled.li`
    position: relative;
    background-color: #E5E5E5;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 10px;

`
const SVGContainer = styled.div`
    width: 100%;
    height: 75%;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        width: 50%;
        & path{
            fill: #0CC2FC;
        }
    }
`
const TechnologyCardBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 25%;
    background: linear-gradient(90deg, #0CC2FC -45.96%, #1A0EFF 137.75%, #1A06FF 145.72%, #C4C4C4 145.74%);
    border-radius:  0px 0px 10px 10px;
    & p {
        color: white;
        font-size: 2em;
    }

`

const TechnologyCard = (props) => {
    return(
       <TechnologyCardContainer>
           <TechnologyCardBanner>
                <p>{props.title}</p>
            </TechnologyCardBanner>
            <SVGContainer>
                {props.children}
            </SVGContainer>
       </TechnologyCardContainer>
    )
}

export default TechnologyCard;