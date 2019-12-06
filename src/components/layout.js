/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle'
import i18n from '../configs/i18n';

import Header from './Header';
const LayoutContainer = styled.div`

  font-size: 10px;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-gap: 20px;
  grid-auto-rows: 5vh;
  height: 200vh;
  @media screen and (max-width: 600px) {
      *{
        grid-template-columns: 1fr;
        font-size: 5px;
        
      }
      overflow-x: hidden;

      
    }
 
`
const Layout = ({ children }) => {


  return (
      <LayoutContainer>
      <GlobalStyle/>
      <p>{i18n.t('hero.first3')}</p>

      {children}
      
      </LayoutContainer>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
