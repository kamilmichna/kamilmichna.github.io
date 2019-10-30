/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle'
import Header from "./header"

const LayoutContainer = styled.div`

  font-size: 10px;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-gap: 20px;
  grid-auto-rows: 5vh;
 
`
const Layout = ({ children }) => {


  return (
      <LayoutContainer>
      <GlobalStyle/>
      <Header/>
      <main>{children}</main>
      </LayoutContainer>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
