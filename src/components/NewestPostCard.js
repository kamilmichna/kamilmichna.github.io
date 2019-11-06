import React from 'react';
import styled from 'styled-components';


const NewestPostCardContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
background: #FBFBFB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const PostCardBanner = styled.div`
height: 20%;
width: 100%;
bottom: 0px;
background: linear-gradient(270deg, #0CC2FC -10.63%, #1A06FF 107.48%);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0px 0px 10px 10px;
& p{
    color: white;
    font-size: 2.5em;
}
`
const NewestPostCard = (props) => {
    return( 
        <NewestPostCardContainer>
            <PostCardBanner>
                <p>
                    {props.title}
                </p>
            </PostCardBanner>
        </NewestPostCardContainer>
    )
}

export default NewestPostCard;