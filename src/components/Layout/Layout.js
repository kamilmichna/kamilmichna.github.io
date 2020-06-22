import React from "react";
import {LayoutContainer} from './Layout.styled';
import { Helmet } from 'react-helmet';
const Layout = (props) => {
    return(
            <LayoutContainer>
                <Helmet  defer={false}> 
                    <title>Kamil Michna</title>
                    <meta name="description" content="My name is Kamil Michna an I`m 18 years old web developer from Krosno, Poland"/>
                    <html lang='en'></html>
                </Helmet>
              
                {props.children}
            </LayoutContainer>
    )
}

export default Layout
