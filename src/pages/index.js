import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SVGLine from '../components/SVGLine';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header";
import '@csstools/normalize.css';
import SVGBalls from '../components/SVGBalls';
import styled from 'styled-components';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

const PageSection = styled.section`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: 5vh;
      grid-column: 1/13;
    min-height: 10vh;
    &.section--hero{
      
      grid-row: 3/16;
      & p {
        color: rgba(0,0,0,0.87);
        font-weight: 700;
          font-size: 3.6em;
          line-height: 1.5;

          & span{
              color: #0CC2FC;
          }
      }
      
      & .hero--subdescription{
        grid-column: 7/11;
          grid-row: 7;
      }
      & .hero--description{

          grid-column: 2/6;
          grid-row: 3;

      }
    }
`

const IndexPage = () => {
  const [lng,setLng] = useState();
  useEffect(()=>{
    
    i18n
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
      debug: true,
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
  
      // react i18next special options (optional)
      // override if needed - omit if ok with defaults
      
    });
    i18n.changeLanguage('pl');
  },[])
  const onChangeLanguage = (lang) => {
   
    setLng(lang);
  }
  useEffect(()=>{
      console.log(lng)
      console.log(i18n.language)
      i18n.changeLanguage(lng);
  },[lng])
  return(  
  <Layout>
    <SEO title="Home" />
    <Header onChangeLanguage={onChangeLanguage}/>
    <SVGLine/>
    <SVGBalls/>
    <PageSection id='hero' className='section--hero'>
      <p className='hero--description'>{i18n.t('hero.first1')} <span>{i18n.t('hero.first2')}</span> {i18n.t('hero.first3')}</p>
      <p className='hero--subdescription'>I`m 18 years old web developer from Krosno. I became interested in coding when i turn 16 and it still stays my biggest hobby. Follow the dashed line to <span>see more!</span></p>
    </PageSection>

  </Layout>
)
}


export default IndexPage
