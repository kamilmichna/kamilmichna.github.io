import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import HeaderNav from "./HeaderNav";
import SwitchButton from "./SwitchButton";
import i18n from "../configs/i18n";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: fixed;
  left: 0px;
  top: 0px;
  height: 7vh;
  width: 100%;
  z-index: 99999;
  background-color: white;
  transition: box-shadow 0.5s;
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.1);
    height: 15vh;
  }
  &.header--scrolled {
    @media screen and (min-width: 600px) {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.1);
    }
  }
`;
const HamburgerButton = styled.div`
  position: relative;
  width: 100px;
  display: none;
  height: 7vh;
  grid-column: 3;
  padding: 0px;
  @media screen and (max-width: 600px){
    grid-column: 3;
    display: flex;
    justify-content: center; 
    z-index: 99999999999;
    align-items: center;
    font-size: 3.5em !important; 
    &.--active {
      display: flex;
    }
    color: rgba(0, 0, 0, 60);
    &:hover {
      cursor: pointer;
    }

  }
  @media screen and (max-width: 1100px) and (min-width: 601px) {
    grid-column: 13;
    display: flex;
    justify-content: center; 
    z-index: 99999999999;
    align-items: center;
    font-size: 2.5em; 
    &.--active {
      display: flex;
    }
    color: rgba(0, 0, 0, 60);
    &::before {
      position: absolute;
      left: -3px;
      content: "";
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #0cc2fc;
      transition-duration: 0.5s;
    }
    &::after {
      position: absolute;
      left: 1px;
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: white;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover::before {
      transform: scale(1.5);
      cursor: pointer;
    }
  }
`;

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
  @media screen and (max-width: 1100px) and (min-width: 601px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/5 !important;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5em !important;
    grid-column: 1 !important;
    text-align: center;
  }
`;

const Header = props => {
  const [navIsActive, setNavIsActive] = useState(false);
  const onChangeLanguageClick = lng => {
    props.onChangeLanguage(lng);
  };
  const onHamburgerButtonClick = () => {
    setNavIsActive(!navIsActive);
  };
  useEffect(() => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > 0 &&
        !header.classList.contains("header--scrolled")
      ) {
        header.classList.add("header--scrolled");
      } else if (
        window.scrollY < 1 &&
        header.classList.contains("header--scrolled")
      ) {
        header.classList.remove("header--scrolled");
      }
    });
  }, []);
  return (
    <HeaderContainer id="header">
      <Title>Kamil Michna {navIsActive}</Title>
      <HeaderNav toggleNav={onHamburgerButtonClick} hamburgerActive={navIsActive} />
      <SwitchButton onSwitchChange={onChangeLanguageClick} />
      <HamburgerButton onClick={onHamburgerButtonClick}>menu</HamburgerButton>
    </HeaderContainer>
  );
};

export default Header;
