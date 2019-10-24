import React from 'react';
import GlobalStyle from './GlobalStyle';
import SEO from '../SEO/SEO';


const Layout = (props) => {
    return(
        <div id="layoutContainer">
                <SEO title={props.pageTitle}/>
                <GlobalStyle/>
                {props.children}
        </div>
    )
}

export default Layout;