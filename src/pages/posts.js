import React from 'react'
import Layout from '../components/Layout'
import {graphql} from "gatsby"
import PostLink from "../components/PostLink"
const Posts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return(
    <Layout>
       <h2 className="pages_content_header">Posts:</h2>
       <div className="post_link_container">{Posts}</div>
    </Layout>
  )
}
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
  }`
export default Posts