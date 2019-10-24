import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const PostLinkSquare = styled.li`
    width: 100%;
    min-height: 30vh;
    height: auto;
    margin-bottom: 30px;
    background-color: #2892F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position:relative;
    transition-duration: 0.5s;
    padding-top: 30px;
    padding-bottom: 30px;
    &:hover{
        transform: scale(1.10);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }
    & h3{
        top: 3vh;
        color: white;
        margin: 10px;
        font-size: 2.10em;
        text-align: center;
        font-weight: 700;
        margin-bottom: 20px;
        @media (max-width: 800px){
            font-size: 2em;
        }
    }
    @media (max-width: 800px){
        min-height: 30vh;
        & p{
            font-size: 3em;
        }
        
    }
    & p{
        margin-top: 30px;
        text-align: left;
        color: white;
        width: 80%;
        font-size: 2em;
        line-height: 1.5;
        @media (max-width: 800px){
            font-size: 1.25em;
        }
    }
`

const PostLink = ({ post }) => (
    <Link title={`Link do posta: ${post.frontmatter.title}`} to={post.frontmatter.path}>
        <PostLinkSquare>
        <h3>{post.frontmatter.title} ({post.frontmatter.date})</h3>
        <p>{post.excerpt}</p>
        </PostLinkSquare>
    </Link>
)

export default PostLink