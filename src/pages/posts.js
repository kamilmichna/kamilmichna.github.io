import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PostLink from '../components/PostLink/PostLink.js';
import reading from '../images/reading.svg';
const PostLinkContainer = styled.ul`
    height: 100%;
    grid-column: 2/7;
    grid-row: 4;
    @media (max-width: 800px){
      grid-column: 2/12;
    }
`;
const ReadingImage = styled.img`
    grid-column: 8/12;
    width: 100%;
    grid-row: 3;
    @media (max-width: 800px){
      display: none;
    }
`
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink  key={edge.node.id} post={edge.node} />);
  return(
      <Layout pageTitle="Kamil Michna - posty">
            <Header/>
            <PostLinkContainer>
                {Posts}
            </PostLinkContainer>
            <ReadingImage alt="Zdjęcie" src={reading}/>
      </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`