import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header/Header';
import Layout from "../components/Layout/Layout";
import styled from 'styled-components';

const ContentContainer = styled.main`
  grid-column: 3/11;
  grid-row: 4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 1100px){
    grid-column: 2/12;
  }
  @media (max-width: 800px){
    grid-column: 1/13;
    grid-row: 3;
  }
`

const ContentContainerHeader = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 3em;
  font-weight: 900;
  background: #2892F4;
  @media (max-width: 800px){
    font-size: 2em;
  }
`

const ContentContainerText = styled.article`
  color: black;
  width: 100%;
  padding: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin-bottom: 5vh;
  line-height: 1.5;
  @media (max-width: 800px){
    margin-bottom: 0px;
  }
  & li{
    font-weight: 500;
    font-line: 1.5;
  }
  & h1{
    text-align: center;
    margin: 20px;
    font-size: 4em;
    font-weight: 700;
    color : #2892F4;
    @media (max-width: 800px){
      font-size: 3em;
      margin: 10px;
    }
  }
  & h2{
    text-align: left;
    margin: 20px;
    font-size: 3em;
    font-weight: 700;
    color : #2892F4;
    @media (max-width: 800px){
      font-size: 2.5em;
      margin: 5px;
    }
  }
  & p{
    font-size: 2em;
    margin: 20px;
    margin-top: 40px;
    line-height: 2;
    @media (max-width: 800px){
      font-size: 1.5em;
      line-height: 1.5;
      margin: 10px;
    }
  }
  & h3{
    font-size: 3em;
    text-align: right;
    color: #2892F4;
    font-weight: 700;
  }
  & strong{
    background-color: #2892F4;
    padding: 1px;
    padding-left: 5px;
    padding-right: 5px;
    color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  & pre code{
    font-size: 2em;
  }
  & img{
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  & > code{
    margin: 5px;
  }
  & li{
    font-size: 2em;
    margin: 20px;
    line-height: 2;
    font-weight: 600;
  }
 
  & li::before{
    content: '- ';
  }
  & a{
    font-size: 1em;
    font-weight: bold;
  }
`
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
       <Header/>
       <ContentContainer>
         <ContentContainerHeader>{frontmatter.title}</ContentContainerHeader>
         <ContentContainerText   dangerouslySetInnerHTML={{ __html: html }}></ContentContainerText>
       </ContentContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`