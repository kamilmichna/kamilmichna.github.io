import {createGlobalStyle}from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
@import url('https://fonts.googleapis.com/css?family=Roboto');
#layoutContainer{
    font-family: 'Roboto', sans-serif;
    max-width: 100vw;
    width: 100%;
    height:100%;
    font-size: 10px;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-auto-rows: 5vh;
    grid-gap: 20px;
    min-height: 100vh;
}
body::-webkit-scrollbar {
    width: 1em;
}
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:  #2892F4;
  outline: 1px solid slategrey;
}

a{
    text-decoration: none;
}
@media (max-width: 1600px) {
    #layoutContainer{
        font-size: 8px;
    }
}
`
export default GlobalStyle;