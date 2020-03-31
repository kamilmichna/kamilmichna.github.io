import React, { Component } from "react"
import { graphql } from "gatsby"
import PostCard from '../components/PostCard'
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import styled from "styled-components";

const PostList = styled.ul`
display: grid;
grid-template-columns: repeat(12,1fr);
grid-row: 5;
grid-auto-rows: 2vh;
grid-column: 2/  13;

`
const PostListTitle = styled.p`
grid-row: 4;
grid-auto-rows: 2vh;
grid-column: 2/6;
font-size: 2.15vw;
`
const PostsPage = ({data}) => {
    console.log(data.allWordpressPost);
    return (
        <Layout>
            <Header/>
            <SEO title="Home" />
            <PostListTitle>Lista postów</PostListTitle>
            <PostList>
                    {data.allWordpressPost.edges.map(({node}) => (          
                            <PostCard slug={node.slug} title={node.title}/>
                    ))}
            </PostList>
        </Layout>
       
  
    )
}
export const query = graphql`
query {
  allWordpressPost(sort: { fields: [date], order: DESC  }) {
    edges {
      node {
        id
        date(formatString: "DD, MMM, YYYY")
        title
        slug
        excerpt
        jetpack_featured_media_url
        categories {
            name
        }
      }
    }
  }
}


`



export default PostsPage