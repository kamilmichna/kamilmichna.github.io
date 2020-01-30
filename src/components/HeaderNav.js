import React from "react";
import styled from "styled-components";
import Button from "./Button";
import i18n from "../configs/i18n";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 10px;
  box-sizing: border-box;
  min-width: 40%;
  height: 100%;
  position: absolute;
  right: 20px;
  @media screen and (max-width: 1100px) {
    padding: 0px;
    z-index: 999999999999999999;
    display:none;
    transition-duration: 0.5s;
    &.--active{
      display: flex;
      left:0px;
    }
    justify-content: center;
    align-items: center;
    flex-direction:column;
    position: fixed;
    top:0px;
    left:-1000px;
    background-color: white;
    width: 100vw;
    height: 100vh;
  }
`;

//  TODO move the hamburger button to header and pass if active with props, code below is stupid af ... 
const HeaderNav = (props) => {
  return (
    <Nav className={props.hamburgerActive ? '--active' : ''}>
       <Button  toggleNav={props.toggleNav} className="NavButton" to="/">
        {i18n.t("navButtons.first")}
      </Button> 
      <Button toggleNav={props.toggleNav} className="NavButton" isBlank to="https://github.com/kamilmichna">
        {i18n.t("navButtons.second")}
      </Button>
      <Button toggleNav={props.toggleNav} className="NavButton" to='#section--contact'>
        {i18n.t("navButtons.third")}
      </Button>
     
    </Nav>
  );
};

export default HeaderNav;
