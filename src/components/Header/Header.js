import React from "react";
import styled from "styled-components";
import {Link} from 'gatsby';
const HeaderContainer =  styled.header`
    grid-column: 1/13;
    height: 10vh;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-gap: 20px;
    align-items: flex-end;
    &:hover{
        cursor: default;
    }
    @media (max-width: 800px){
        grid-gap: 0px;
    }

`
const Logo = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4em;
    font-weight: bold;
    grid-column:2/4;
    background-color: green;
    height: 60%;
    background: #2892F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: white;
    @media (max-width: 800px){
        height: 100%;
        grid-column:1/4;
        padding:20px;
        box-sizing: border-box;
        box-shadow: none;
        border-radius: 0px;
    }
    
`
const Navigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap:20px;
    font-size: 1.6em;
    grid-column:7/12;
    height: 60%;
    background: #2892F4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    & a{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        text-decoration: none;
      
  
    }
    & a::after{
        transition-duration: 0.1s;
        content: '';
    }
    & a:hover::after{
        content: '';
        width: 50%;
        border-radius: 4px;
        height: 3px;
        margin: 1px;
        background-color: white;
    }
    @media (max-width: 800px){
        height: 100%;
        grid-column:4/13;
        box-shadow: none;
        border-radius: 0px;
    }

`
const Header = (props) => {
    return(
        <HeaderContainer>
            <Logo>Kamil Michna</Logo>
            <Navigation>
                <Link title="Strona opowiadająca o autorze" to="/">O mnie</Link>
                <Link title="Spis postów" to="/posts">Posty</Link>
                <Link title="Moje projekty" to="/projects">Moje projekty</Link>
                <Link title="Kontakt z autorem" to="/contact">Kontakt</Link>

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kamilmichna">Github</a>        
            </Navigation>
        </HeaderContainer>
    )
}

export default Header;