import React from 'react';
import Helmet from 'react-helmet';


const SEO = (props) => {
    return(
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Strona Kamil Michna to amatorski blog programistyczny połączony z portfolio. Zawiera posty o tematyce programistycznej, oraz osobiste informacje o autorze."/>
            <meta name="theme-color" content="#2892F4"></meta>
            <meta property="og:image" content="https://kamilmichna.github.io/icons-37e9d0c061bb82ee4fff77761dc94d79/favicon.ico"></meta>
            <meta property="og:title" content={props.title}></meta>
            <meta property="og:description" content="Strona Kamil Michna to amatorski blog programistyczny połączony z portfolio. Zawiera posty o tematyce programistycznej, oraz osobiste informacje o autorze."></meta>
        </Helmet>
    )
}

export default SEO;