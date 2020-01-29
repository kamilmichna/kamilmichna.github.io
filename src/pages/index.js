import React, { useEffect, useState } from "react"
import SVGLine from '../components/SVGLine';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header";
import '@csstools/normalize.css';
import SVGBalls from '../components/SVGBalls';
import styled from 'styled-components';
import i18n from '../configs/i18n';
import { initReactI18next } from 'react-i18next';
import TechnologyCard from '../components/TechnologyCard';
import NewestPostCardContainer from '../components/NewestPostCard';
import ProjectCard from '../components/ProjectCard';
import projectsConfig from '../configs/projectsConfig';
import resume_pdf from '../images/resume-1.pdf'
const PageSection = styled.section`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: 5vh;
      grid-column: 1/ span 13;
    min-height: 10vh;
    z-index: 999;

    &.section--contact{
      grid-row: 78 / span 5;
      @media screen and (max-width: 600px) {
        grid-row: 73 / span 5;
            
        }
      & p{
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 0.87);
          grid-column: 2/12;
          font-size: 3em;
          font-family: Overpass;
          font-weight: 600;
        }
        & label{
          @media screen and (max-width: 500px) {
            display: none;           
          }
        }
     
      & .contact--form{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: 5vh;
        grid-row: 3/ span 13;
        grid-column: 1/13;
        font-family: Roboto;
        grid-gap: 30px;
        background: linear-gradient(89.85deg, #1A06FF -18.12%, #0CC2FC 103.29%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 40px;
        @media screen and (max-width: 600px) {
          grid-template-columns: 1fr;
          grid-row: 3/ span 18;
        }
        & a{
          display: flex;
          justify-content: center;
          align-items: center;

        }
        & .social_media__paragraph{
        color: white;
        grid-column: 3;
        grid-row: 1;
        font-family: Roboto;
        font-weight: 500;
        font-size: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 500px) {
          grid-column: 1;
        }
      }
        & .form__email{
          grid-column: 1/3;
          width: 70%;
          background: #FFFFFF;
          color: rgba(0, 0, 0, 0.87);
          font-size: 2.25em;
          box-sizing: border-box;
          padding: 30px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          @media screen and (max-width: 600px) {
            grid-column: 1;
            grid-row: 4;
            width: 100%;
            padding: 20px;
        }
        }
        & .newsletter__info{
          grid-column: 3;
          grid-row: 6/8;
          font-size: 2em;
          line-height: 1.5;
          font-weight: 500;
          color : white;
          text-align: center;
          @media screen and (max-width: 500px) {
          grid-column: 1;
          grid-row: 8;
          font-size: 3em;
        }

        }
        & .social_media__icons{
          display: grid;
          grid-template-columns: repeat(3,1fr);
          grid-column: 3;
          grid-row: 2/4;
          @media screen and (max-width: 500px) {
          grid-column: 1;
          grid-row: 2;
          }
          & svg{
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            transition-duration: 0.5s;
            @media screen and (max-width: 500px) {
              height: 50%;
          }
            & path{
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            &:hover{
              transform: scale(1.1);
              cursor: pointer;
            }
          }

        }
        & .form__content{
          grid-column: 1/3;
          resize: none;
          grid-row: 4/8;
          background: #FFFFFF;
          color: rgba(0, 0, 0, 0.87);
          font-size: 2.25em;
          padding: 30px;
          width: 70%;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          @media screen and (max-width: 500px) {
            grid-column: 1;
            width: 100%;
            grid-row: 5/8;
        }
   
        }
        & .form__send{
          grid-row: 5;
          grid-column: 3;
          background: linear-gradient(120.39deg, #1A06FF -97.08%, #0CC2FC 79.92%);
          border: 3px solid #FFFFFF;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          color: white;
          font-size: 2.5em;
          font-weight: 700;
          width: 60%;
          margin-left: auto;
          margin-right: auto;
          height: 7vh;
          transition-duration:0.5s;
          @media screen and (max-width: 500px) {
            grid-column: 1;
            grid-row: 9;
        }
          &:hover{
               background: white;
               cursor: pointer;
               border: 3px solid #1A06FF;
               color: #1A06FF;
          }
        }
        & label{
          grid-column: 1;
          color: #ffffff;
          font-weight: 600;
          font-size: 3em;
          font-family: Overpass;
          font-style: normal;
          font-weight: normal;
        }
      }
    }
    &.section--hero{
      grid-row: 3/16;
      & p {
        color: rgba(0, 0, 0, 0.87);
        font-weight: 500;
          font-size: 3.6em;
          line-height: 1.5;

          & span{
              color: #0CC2FC;
              @media screen and (max-width: 1100px) {
                font-size: 2em;

              }
          }
      }
      
      & .hero__subdescription{
        grid-column: 7/11;
        grid-row: 7/9;
        @media screen and (max-width: 1100px) {
          grid-row: 3/5;
          grid-column: 7/12;
          font-size: 3em;
        }
          
      }
      & .hero__description{

          grid-column: 2/6;
          grid-row: 3;
          @media screen and (max-width: 1100px) {
            font-size: 3em;
        }
      }
    
      }
      &.section--technologies{
        grid-row: 16/ span 17;
        @media screen and (max-width: 600px) {
          grid-row: 8/ span 17;
        }
        @media screen and (max-width: 1100px) and (min-width: 601px) {
          grid-row: 13/ span 17;
        }
        & .technologies__heading{
          display: flex;
          justify-content: center;
          align-items:center;

          grid-column: 2/6;
          font-size: 3.6em;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.87);
          @media screen and (max-width: 1100px) and (min-width: 601px){
            grid-column: 2/13;
          }
          @media screen and (max-width: 600px) {
            grid-column: 1/13;
            grid-row: 1;
          }
         
        }
        
      }
   
      &.section--posts{
        grid-row: 33/ span 13;
        @media screen and (max-width: 600px) {
          grid-row: 19/ span 13;
          }
        & .heading{
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column: 3/11;
          grid-row: 1/4;
          background: linear-gradient(180deg, #0CB7FC 0%, #1A06FF 99.99%, rgba(12, 194, 252, 0) 100%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
          border-radius: 20px 0px;
          @media screen and (max-width: 500px) {
            padding: 20px;
            text-align: center;
            line-height: 1.5;
            grid-column: 1/13;
            border-radius: 0px;
          }
          & p{ 
            font-size: 2.25em;
            color: white;
          }
          
        }
      
        & .post_card_container{
          grid-column: 1/13;
          grid-row: 5/15;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;
          }
          grid-gap: 10%;
          padding-left: 10%;
          padding-right: 10%;
        }
      }
      &.section--projects{
        grid-row: 46/ span 16;
        @media screen and (max-width: 600px) {
          grid-row: 30/ span 16;
          }
        & > p {
          grid-column: 1/13;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3em;
          font-weight: 500;
          @media screen and (max-width: 1100px) {
            padding: 25px;
            font-size: 3em;
            text-align: center;
          }
        }
        & .project_card_container{
          display: flex;
          justify-content: space-around;
          align-items:center;
          grid-column: 1/13;
          grid-row: 3/17;
          background: linear-gradient(90deg, #0CC2FC -33.42%, #0B00F7 178.31%, #1A06FF 188.7%, rgba(196, 196, 196, 0) 188.72%);
          @media screen and (max-width: 500px) {
              
              flex-direction: column;
              grid-row: 4/ span 50 !important;
            
          }
       
        }
      }
      &.section--resumee{
        grid-row: 62/ span 16;
        @media screen and (max-width: 600px) {
          grid-row: 64/ span 16;
            
          }
        & p{
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 0.87);
          grid-column: 2/12;
          font-size: 3em;
          font-weight: 600;
        }
        & a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & .img_wrapper{
          grid-column: 1/13;
          grid-row: 3/21;
          display: flex;
          justify-content:center;
          @media screen and (max-width: 500px) {
            grid-row: 3/15;
          }

          & img{
         height: 100%;
         width: auto;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
         transition-duration: 0.5s;
         &:hover{
           cursor: pointer;
           transform: scale(1.02);
         }
        }
        }
      }
   
`
const TechnologiesContainer = styled.ul`
    grid-column: 2/8;
    grid-row: 3/20;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    grid-template-rows: repeat(3,1fr);
    @media screen and (max-width: 1100px) and (min-width: 601px)  {
      grid-column: 2/12;
      grid-row: 3/16;
      grid-gap: 30px;
    }
    @media screen and (max-width: 600px)  {
      grid-column: 2/12;
      grid-row: 3/16;
      grid-gap: 0px;
    }
`


const IndexPage = () => {
  const [lng,setLng] = useState('pl');
  const projectCards = projectsConfig.map(el=>(
    <ProjectCard thisSite={el.thisSite} to={el.to} text={lng === 'pl' ? el.textEng: el.textPl  } title={el.title}></ProjectCard>
  ))
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
      i18n.changeLanguage(lng);

  },[lng])
  return(  
  <Layout>
    <SEO title="Home" />
    <Header onChangeLanguage={onChangeLanguage}/>
    <SVGLine/>
    <SVGBalls/>
    <PageSection id='hero' className='section--hero'>
      <p className='hero__description'>{i18n.t('hero.first1')} {i18n.t('hero.first2')} {i18n.t('hero.first3')}</p>
      <p className='hero__subdescription'>{i18n.t('hero.second')}</p>
    </PageSection>

    <PageSection className='section--technologies' id='technologies'>
        <p className='technologies__heading'>{i18n.t('technologies.heading')}</p>
        <TechnologiesContainer>
          <TechnologyCard title='React'>
            <svg viewBox="0 0 128 128">
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title='Angular'>
            <svg viewBox="0 0 128 128">
            <path fill="#C4473A" d="M52.864 64h23.28l-12.375-25.877zM63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635-59.637-20.485zm-15.766 73.974l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.14100000000000001l.123-.274v.274h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title='JavaScript'>
            <svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title='Node'>
            <svg viewBox="0 0 128 128">
            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title="TypeScript">
            <svg viewBox="0 0 128 128">
            <path id="plain" class="cls-1" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title='Express'>
            <svg viewBox="0 0 128 128">
            <path d="M40.53,77.82V50.74H42V55a5.57,5.57,0,0,0,.48-.6,7.28,7.28,0,0,1,6.64-4.12c3.35-.1,6.07,1.14,7.67,4.12a13.24,13.24,0,0,1,.32,12.14c-1.49,3.34-5.17,5-9.11,4.39a7.37,7.37,0,0,1-5.88-3.88V77.82ZM42,60.32c.13,1.32.18,2.26.33,3.18.58,3.62,2.72,5.77,6.08,6.16A6.91,6.91,0,0,0,56,65.27a11.77,11.77,0,0,0-.26-9.68,6.77,6.77,0,0,0-7.13-3.94,6.59,6.59,0,0,0-5.89,4.87A33.4,33.4,0,0,0,42,60.32Z"></path><path d="M88.41,64A7.92,7.92,0,0,1,80.67,71c-6.16.31-9.05-3.78-9.51-8.5A13.62,13.62,0,0,1,72.36,55a8.37,8.37,0,0,1,8.71-4.67,8,8,0,0,1,7.1,6.09,41.09,41.09,0,0,1,.69,4.5H72.67c-.3,4.28,2,7.72,5.26,8.55,4.06,1,7.53-.76,8.79-4.62C87,63.86,87.51,63.72,88.41,64ZM72.67,59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76,51.57,72.86,54.75,72.67,59.55Z"></path><path d="M91.39,64.1h1.42A5.69,5.69,0,0,0,96.15,69a8.73,8.73,0,0,0,7.58-.2,3.41,3.41,0,0,0,2-3.35,3.09,3.09,0,0,0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25,35.25,0,0,1,94,59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21,10.21,0,0,1,9.76-.15,5.14,5.14,0,0,1,2.6,5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17,9.17,0,0,0-3,.91,3,3,0,0,0-1.74,3,3,3,0,0,0,2,2.82c1.54.56,3.15.92,4.73,1.36,1.27.35,2.59.58,3.82,1a4.51,4.51,0,0,1,3.1,4.07,4.81,4.81,0,0,1-2.59,5c-3.34,1.89-8.84,1.39-11.29-1A6.67,6.67,0,0,1,91.39,64.1Z"></path><path d="M125.21,56.61h-1.33c0-.18-.07-.34-.09-.49a4.35,4.35,0,0,0-3.54-4.18,8.73,8.73,0,0,0-5.61.27,3.41,3.41,0,0,0-2.47,3.25,3.14,3.14,0,0,0,2.4,3.16c2,.62,4.05,1,6.08,1.56a17,17,0,0,1,1.94.59,5,5,0,0,1,.27,9.31,11.13,11.13,0,0,1-9,.09,6.24,6.24,0,0,1-3.76-6.06l.56,0h.74a7.29,7.29,0,0,0,11.1,4.64,3.57,3.57,0,0,0,1.92-3.34,3.09,3.09,0,0,0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43,35.43,0,0,1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07,10.07,0,0,1,9.92-.11A5.23,5.23,0,0,1,125.21,56.61Z"></path><path d="M38.1,70.51a2.29,2.29,0,0,1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06,2.76-4.12,5.41-6,8.16a2.2,2.2,0,0,1-2.7,1.06l7.73-10.37-7.19-9.37a2.39,2.39,0,0,1,2.85,1c1.67,2.44,3.52,4.77,5.36,7.24,1.85-2.45,3.68-4.79,5.39-7.21a2.15,2.15,0,0,1,2.68-1l-2.79,3.7c-1.25,1.65-2.48,3.31-3.78,4.92a1,1,0,0,0,0,1.49C33.29,64.07,35.66,67.25,38.1,70.51Z"></path><path d="M70.92,50.66v1.4a7.25,7.25,0,0,0-7.72,7.49q0,4.94,0,9.88c0,.35,0,.7,0,1.12H61.77V50.74h1.4V54.8C64.9,51.84,67.57,50.74,70.92,50.66Z"></path><path d="M2.13,60c.21-1,.34-2.09.63-3.11,1.73-6.15,8.78-8.71,13.63-4.9,2.84,2.23,3.55,5.39,3.41,8.95h-16C3.54,67.3,8.13,71.14,14,69.18a6.09,6.09,0,0,0,3.87-4.31c.31-1,.81-1.17,1.76-.88a8.12,8.12,0,0,1-3.88,5.93,9.4,9.4,0,0,1-10.95-1.4,9.85,9.85,0,0,1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13,60.85,2.13,60Zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09,51.6,4,54.8,3.81,59.55Z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title="Git">  
            <svg viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title="Wordpress">
            <svg viewBox="0 0 128 128">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#494949" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286-34.652-.618-63.608 27.5-63.617 61.597-.01 35.079 27.612 63.064 62.209 63.014zm-.101-121.594c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719 8.872-.135 17.747-.135 26.618.008 1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58 6.463 19.225 12.793 38.057 19.349 57.56 2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113-25.392-23.566-65.294-15.13-79.997 10.475 5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zM49.274 113.867c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zM40.818 111.789l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zM117.246 67.227c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
            </svg> 
          </TechnologyCard>
          <TechnologyCard title="CSS & HTML">    
            <svg viewBox="0 0 128 128">
            <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
            </svg>    
          </TechnologyCard>
        </TechnologiesContainer>
    </PageSection>
    <PageSection className='section--posts'>
        <div className='heading'>
            <p>{i18n.t('newestposts.heading')}</p>
        </div>
        <div className='post_card_container'>
          <NewestPostCardContainer title='Matura 2019 - Ulubione cyfry'></NewestPostCardContainer>
          <NewestPostCardContainer title='Biblioteka Webu #4 - Angular'></NewestPostCardContainer>
        </div>
    </PageSection>
    <PageSection className='section--resumee'>
      <p>{i18n.t('resume.heading')}</p>
      <div className='img_wrapper'>
      <img src={resume_pdf}/>
      </div>

    </PageSection>

    <PageSection className='section--projects'>
      <p>{i18n.t('projects.text')}</p>
      <div className='project_card_container'>{projectCards}</div>

    </PageSection>

    <PageSection id='section--contact' className='section--contact'>
    <p>{i18n.t('contact.header')}</p>

      <form className='contact--form' action="https://formspree.io/xayyagnn" method="POST">
      <label>{i18n.t('contact.email')}</label>
      <input placeholder={i18n.t('contact.pl1')} className="form__email" type="text"  name="_replyto"/>
      <label>{i18n.t('contact.content')}</label>
      <textarea placeholder={i18n.t('contact.pl2')} className='form__content' type="text" name="content"/>
      <p className="social_media__paragraph">
        Social Media
      </p>
      <div className='social_media__icons'>
      <a target="_blank" href='https://www.facebook.com/kamil.michna.146'>
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.51758 88.0688C6.51758 92.1647 9.83543 95.4822 13.9309 95.4822H88.0688C92.1647 95.4822 95.4822 92.1647 95.4822 88.0688V13.9309C95.4822 9.83523 92.1647 6.51758 88.0688 6.51758H13.9311C9.83543 6.51758 6.51778 9.83543 6.51778 13.9309L6.51758 88.0688ZM52.8535 84.3615V54.7069H45.4398V43.586H52.8535C52.8535 24.4771 53.6681 23.1985 76.9484 23.1985V34.3191C64.678 34.3191 65.8275 35.005 65.8275 43.5862H76.9484V54.7071H65.8275V84.3617L52.8535 84.3615Z" fill="white"/>
</svg>
      </a>
<a target="_blank"  href='https://github.com/kamilmichna'>
<svg width="109" height="102" viewBox="0 0 109 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7511 76.9553C31.4267 77.2968 31.0212 77.2399 30.5346 76.7845C30.0074 76.3671 29.9263 76.0066 30.2913 75.703C30.6157 75.3615 31.0212 75.4184 31.5078 75.8738C31.9944 76.2912 32.0755 76.6517 31.7511 76.9553ZM29.1964 73.4832C29.5614 73.9385 29.5614 74.299 29.1964 74.5647C28.872 74.7923 28.5273 74.6595 28.1624 74.1662C27.7974 73.6729 27.7974 73.3314 28.1624 73.1417C28.5273 72.876 28.872 72.9899 29.1964 73.4832ZM25.486 70.068C25.2833 70.3336 25.0197 70.3716 24.6953 70.1818C24.2898 69.9921 24.1479 69.7644 24.2695 69.4988C24.3912 69.3091 24.6548 69.2711 25.0603 69.385C25.4658 69.5747 25.6077 69.8024 25.486 70.068ZM27.3716 72.0033C27.1283 72.2689 26.8039 72.212 26.3984 71.8325C26.0335 71.4151 25.9929 71.1115 26.2768 70.9218C26.5201 70.6941 26.8445 70.751 27.25 71.0926C27.6149 71.51 27.6555 71.8135 27.3716 72.0033ZM35.2182 78.3783C35.056 78.8336 34.6708 78.9475 34.0625 78.7198C33.3731 78.568 33.1096 78.2834 33.2718 77.866C33.434 77.4486 33.8192 77.3158 34.4274 77.4676C35.0763 77.6573 35.3398 77.9609 35.2182 78.3783ZM39.0502 78.6629C39.0502 79.0803 38.7258 79.289 38.077 79.289C37.3876 79.3649 37.043 79.1562 37.043 78.6629C37.043 78.2455 37.3674 78.0368 38.0162 78.0368C38.7055 77.9609 39.0502 78.1696 39.0502 78.6629ZM42.5781 78.0937C42.6592 78.4731 42.3754 78.7388 41.7266 78.8905C41.0777 79.0423 40.7128 78.8905 40.6317 78.4352C40.5506 77.9798 40.8344 77.6952 41.4833 77.5814C42.1321 77.5055 42.497 77.6763 42.5781 78.0937ZM101.214 23.6785V78.3214C101.214 82.837 99.501 86.698 96.0745 89.9045C92.648 93.111 88.5219 94.7142 83.6964 94.7142H70.0714C69.4226 94.7142 68.9259 94.6952 68.5812 94.6573C68.2365 94.6193 67.8411 94.5245 67.3951 94.3727C66.949 94.2209 66.6246 93.9458 66.4219 93.5474C66.2191 93.1489 66.1177 92.6272 66.1177 91.9821V78.3783C66.1177 74.6975 65.0634 72.0033 62.9548 70.2957C65.2662 70.068 67.3444 69.7265 69.1894 69.2711C71.0345 68.8158 72.9404 68.0758 74.9071 67.0513C76.8738 66.0267 78.5161 64.765 79.834 63.2661C81.1519 61.7672 82.2265 59.775 83.0578 57.2895C83.889 54.8041 84.3047 51.9486 84.3047 48.7231C84.3047 44.1316 82.7029 40.2231 79.4994 36.9977C80.9998 33.5446 80.8376 29.674 79.0128 25.3861C77.8774 25.0446 76.2351 25.2533 74.0859 26.0122C71.9368 26.7711 70.0714 27.606 68.4899 28.5167L66.1786 29.8827C62.4074 28.8961 58.5145 28.4028 54.5 28.4028C50.4855 28.4028 46.5926 28.8961 42.8214 29.8827C42.1726 29.4653 41.3109 28.9531 40.2363 28.3459C39.1617 27.7388 37.4687 27.0083 35.1574 26.1545C32.846 25.3007 31.1023 25.0446 29.9263 25.3861C28.1421 29.674 28.0002 33.5446 29.5005 36.9977C26.2971 40.2231 24.6953 44.1316 24.6953 48.7231C24.6953 51.9486 25.1109 54.7946 25.9422 57.2611C26.7735 59.7276 27.838 61.7198 29.1356 63.2376C30.4332 64.7555 32.0654 66.0267 34.0321 67.0513C35.9988 68.0758 37.9047 68.8158 39.7497 69.2711C41.5948 69.7265 43.673 70.068 45.9844 70.2957C44.3623 71.6618 43.3689 73.616 43.0039 76.1584C42.1523 76.5379 41.2399 76.8225 40.2667 77.0122C39.2935 77.2019 38.1378 77.2968 36.7997 77.2968C35.4615 77.2968 34.1335 76.8889 32.8156 76.073C31.4977 75.2572 30.3724 74.0714 29.4397 72.5155C28.6693 71.3013 27.6859 70.3147 26.4897 69.5557C25.2934 68.7968 24.2898 68.3414 23.4788 68.1897L22.2623 68.0189C21.4107 68.0189 20.8227 68.1043 20.4983 68.275C20.1739 68.4458 20.0725 68.664 20.1942 68.9296C20.3158 69.1952 20.4983 69.4609 20.7416 69.7265C20.9849 69.9921 21.2485 70.2198 21.5324 70.4095L21.9581 70.6941C22.8503 71.0736 23.7322 71.7946 24.6041 72.8571C25.4759 73.9196 26.1146 74.8872 26.5201 75.76L27.1283 77.0691C27.6555 78.5111 28.5476 79.6779 29.8047 80.5697C31.0617 81.4614 32.4202 82.0306 33.88 82.2773C35.3398 82.5239 36.749 82.6567 38.1074 82.6757C39.4659 82.6947 40.5911 82.6283 41.4833 82.4765L42.8822 82.2488C42.8822 83.6908 42.8924 85.645 42.9127 88.1115C42.9329 90.578 42.9431 91.8682 42.9431 91.9821C42.9431 92.8169 42.72 93.4525 42.274 93.8889C41.8279 94.3253 41.3819 94.5719 40.9358 94.6288C40.4898 94.6857 39.8207 94.7142 38.9286 94.7142H25.3036C20.478 94.7142 16.352 93.111 12.9255 89.9045C9.49897 86.698 7.78571 82.837 7.78571 78.3214V23.6785C7.78571 19.1629 9.49897 15.3018 12.9255 12.0954C16.352 8.88888 20.478 7.28564 25.3036 7.28564H83.6964C88.5219 7.28564 92.648 8.88888 96.0745 12.0954C99.501 15.3018 101.214 19.1629 101.214 23.6785Z" fill="white"/>
</svg>
</a>
 <a target="_blank"  href='https://linkedin.com/in/michnakamil'>
 <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.1027 48.7587V48.6201C54.0739 48.6669 54.0433 48.7137 54.0127 48.7587H54.1027Z" fill="white"/>
<path d="M88.6358 8.39648H12.855C9.22792 8.39648 6.28629 11.2679 6.28629 14.8069V91.4747C6.28629 95.0118 9.22792 97.8833 12.855 97.8833H88.6358C92.2683 97.8833 95.21 95.01 95.21 91.4747V14.8069C95.21 11.2662 92.2665 8.39648 88.6358 8.39648ZM33.2396 83.3083H19.8088V42.9008H33.2396V83.3083ZM26.5251 37.381H26.4351C21.93 37.381 19.0154 34.2775 19.0154 30.4003C19.0154 26.4367 22.02 23.4195 26.6132 23.4195C31.2083 23.4195 34.0348 26.4367 34.1247 30.4003C34.1247 34.2775 31.2065 37.381 26.5251 37.381ZM81.6713 83.3083H68.2405V61.6859C68.2405 56.256 66.2974 52.5498 61.4379 52.5498C57.728 52.5498 55.5186 55.0488 54.5453 57.4633C54.1908 58.3251 54.1045 59.5305 54.1045 60.7396V83.3065H40.6737C40.6737 83.3065 40.85 46.6863 40.6737 42.8991H54.1045V48.6186C55.8892 45.8659 59.081 41.9455 66.211 41.9455C75.0467 41.9455 81.6731 47.7226 81.6731 60.135V83.3083H81.6713Z" fill="white"/>
</svg>
 </a>
 





      </div>
      <input class="form__send" type="submit" value={i18n.t('contact.send')}/>
      <p className="newsletter__info">{i18n.t('contact.newsletter')}</p>
      </form>

    </PageSection>
  </Layout>
)
}


export default IndexPage
