import styled from 'styled-components';
import React, { useEffect } from "react"
import Button from './Button';
import HeaderNav from './HeaderNav';
import i18n from '../i18n'
const HeaderContainer = styled.header`
display: grid;
grid-template-columns: repeat(12,1fr);
position: absolute;
left: 0px;
top: 0px;
height: 7vh;
width: 100%;
z-index: 99999;
background-color: white;
transition: box-shadow 0.5s;
align-items: center;
&.header--scrolled{
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.1);
  position: fixed;
}

`
const Title = styled.h1`
  height: 100%;
  font-size: 2.7em;
  color: #070707;
  color: black;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;

`
const ChangeLanguageButton = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: 2em;
  width: 10%;

  height: 100%;
  & p{
    margin: 10px;
  }
`
const Header = (props) => {
  const onChangeLanguageClick = (lng) =>{
    console.log('asd')
    props.onChangeLanguage(lng)
  }
  useEffect(()=>{
    const header = document.querySelector('header');
    window.addEventListener('scroll',()=> {
      if (window.scrollY > 0 && !header.classList.contains('header--scrolled')){
          header.classList.add('header--scrolled');
      }
      else if (window.scrollY < 1 && header.classList.contains('header--scrolled')){
        header.classList.remove('header--scrolled');
      }

    })
  },[])
  return(  
  <HeaderContainer id='header'>
    <Title>Kamil Michna</Title>
    <HeaderNav/>
    <ChangeLanguageButton>
      <p onClick={()=> onChangeLanguageClick('en')}>{i18n.t('languageButtons.pl')}</p>
      <p onClick={()=> onChangeLanguageClick('pl')}>{i18n.t('languageButtons.en')}</p>
    </ChangeLanguageButton>
  </HeaderContainer>
)
}

export default Header
