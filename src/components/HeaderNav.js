import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import i18n from '../configs/i18n'
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
@media screen and (max-width: 600px) {
    display: none;
}
`

 const HeaderNav = () => {

    return(
        <Nav>
            <Button to='/'>{i18n.t('navButtons.first')}</Button>
            <Button isBlank to='https://github.com/kamilmichna'>{i18n.t('navButtons.second')}</Button>
            <Button  to="#section--contact">{i18n.t('navButtons.third')}</Button>
        </Nav>
    )
 }

 export default HeaderNav;