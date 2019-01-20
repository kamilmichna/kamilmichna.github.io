import React from 'react'
import Layout from '../components/Layout'
import {graphql} from "gatsby"
import astronaut from "../images/gatsby-astronaut.png"
const IndexPage = ({data}) => (
  <Layout>
    <img className="face" src={astronaut} alt="hehe"/>
    <h2 className="pages_content_header">{data.site.siteMetadata.helloMessage}</h2>
    <p className="description">{data.site.siteMetadata.description}</p>
  </Layout>
)
export const query = graphql`
query{
  site{
    siteMetadata{
      helloMessage,
      description
    }
  }
}`

export default IndexPage
