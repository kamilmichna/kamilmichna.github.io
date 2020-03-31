import React from 'react';
import styled from 'styled-components';
const PostCardContainer = styled.li`
    display:flex;
    align-items: center;
    grid-column: 1/13;
    grid-row: span 5;
    .post_card__title{
        font-size: 2em;
        text-align: left;
        color: rgba(0,0,0,0.8);
        }
`

const PostCard = (props) => {
    return(
        <PostCardContainer>
            <a href={props.slug}><p className='post_card__title' dangerouslySetInnerHTML={{__html: props.title}}></p></a>
        </PostCardContainer>
    )
}


export default PostCard;