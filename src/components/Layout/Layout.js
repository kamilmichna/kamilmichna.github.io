import React from "react";
import {LayoutContainer} from './Layout.styled';

const Layout = (props) => {
    return(
            <LayoutContainer>
                {props.children}
            </LayoutContainer>
    )
}

export default Layout
