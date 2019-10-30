import styled from 'styled-components';
import React from "react"


const HeaderContainer = styled.header`
display: grid;
grid-template-columns: repeat(12,1fr);
  grid-row: 1/3;
  grid-column: 1/13;
  align-items: center;

`
const Title = styled.h1`
  font-size: 2.7em;
  color: #070707;
  margin: 40px;
  color: black;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>Kamil Michna</Title>

  </HeaderContainer>
)
export default Header
