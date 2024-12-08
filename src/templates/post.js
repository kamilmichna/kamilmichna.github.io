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
height: auto !important;
`
const PostContent = styled.main`
position: relative;
display: flex;
flex-direction:column;
background-color: white;
width:80%;
height:auto;
margin-top: 20vh;
margin-bottom: 20vh;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
& pre{
  max-width: 70%;
  left: 60px;
  padding-left: 20px;
  border-left: 6px solid #0CB7FC;
}
& h2,h3{
    font-size: 2em;
    color: black;
    font-weight: 800;
    margin-bottom: 50px;
    margin-top: 50px;
  }

& code{
  padding: 2px;
  background-color: lightgrey;
}
& div, p {
  text-indent: 20px;
  font-size: 1.5em;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5em;
  color: rgba(0,0,0,0.8);
  margin-top: 20px;
  margin-bottom: 20px;
}

`


const PostContentHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
top: -100px;
height: 100px;
position: absolute;
background: linear-gradient(rgb(12, 183, 252) 0%, rgb(26, 6, 255) 99.99%, rgba(12, 194, 252, 0) 100%);
padding-left: 30px;
box-sizing: border-box;
  & div {
    font-size: 2em;
    color: white;
  }
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
            <p  dangerouslySetInnerHTML={{ __html: post.date }}></p>
          </PostContentHeader>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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