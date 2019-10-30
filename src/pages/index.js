import React from "react"
import { Link } from "gatsby"
import SVGLine from '../components/SVGLine';
import Layout from "../components/layout"
import SEO from "../components/seo"
import '@csstools/normalize.css';
import SVGBalls from '../components/SVGBalls';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SVGLine/>
    <SVGBalls/>
  </Layout>
)

export default IndexPage
