import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Header from '../components/Header';
const PostContainer = styled.main`
display: flex;

flex-direction:column;
align-items: center;
  grid-column: 1/13;
  min-height: 93vh;
  height: 100%;
  background-color: #E9EBEE;
  overflow-y: auto;
  padding-top: 20vh;
  padding-bottom: 10vw;
`
const PostContent = styled.main`
position: relative;
display: flex;
flex-direction:column;
background-color: white;
width:80%;
height:100vh;
& pre{
  position: absolute;
  padding-left: 60px;
  max-width: 70%;
  left: 60px;
  border-left: 6px solid #0CB7FC;
}
& p {
  text-indent: 20px;
  padding: 30px;
  font-size: 1.5em;
  line-height: 1.5em;
  color: rgba(0,0,0,0.87);
}

`


const PostContentHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
top: -100px;
height: 100px;
position: absolute;
background: linear-gradient(rgb(12, 183, 252) 0%, rgb(26, 6, 255) 99.99%, rgba(12, 194, 252, 0) 100%);
padding-left: 30px;
box-sizing: border-box;
  & h2{
    font-size: 3em;
    color: white;
  }
`

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  return (
    <Layout>
      <Header hideLanguageSwitch="true"></Header>
      <PostContainer>
        <PostContent>
          <PostContentHeader>
            <h2 dangerouslySetInnerHTML={{ __html: post.title }}></h2>
          </PostContentHeader>
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </PostContent>

      </PostContainer>
    </Layout>

  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node{
            date(formatString: "DD, MMM, YYYY")
            title
            content
            jetpack_featured_media_url
            categories {
                name
            }
        }
      }
    }
  }
`