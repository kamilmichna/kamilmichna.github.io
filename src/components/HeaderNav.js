import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import i18n from '../i18n'
const Nav = styled.nav`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 30px;
padding: 10px;
box-sizing: border-box;
    min-width: 40%;
    height: 100%;
    position: absolute;
    right: 20px;

`

 const HeaderNav = () => {

    return(
        <Nav>
            <Button to='/'>{i18n.t('navButtons.first')}</Button>
            <Button isBlank to='https://github.com/kamilmichna'>{i18n.t('navButtons.second')}</Button>
            <Button isBlank to="#hero">{i18n.t('navButtons.third')}</Button>
        </Nav>
    )
 }

 export default HeaderNav;