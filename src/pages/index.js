import React from "react"
import  { ThemeProvider }  from 'styled-components';
import Layout from '../components/Layout/Layout.js';
import { Reset } from 'styled-reset';
import Hero from '../sections/Hero/Hero';
import Cursor from '../components/Cursor/Cursor';
import {GlobalStyle} from '../configs/GlobalStyle';
import About from '../sections/About/About';
import Technology from '../sections/Technology/Technology';
import TimeLine from '../sections/TimeLine/TimeLine';
const theme = {
  dark: '#1B1B1B',
  bright: '#FFF'
}

const IndexPage = (props) => {
  return(
    <ThemeProvider theme={theme}>
      <Reset/>
      <Cursor/>
      <GlobalStyle/>
      <Layout>
          <Hero/>
          <About/>
          <Technology/>
          <TimeLine/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
