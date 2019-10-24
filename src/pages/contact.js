import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import contactImg from '../images/contactImg.svg';

const ContactMeImg = styled.img`
    grid-column: 7/12;
    width: 100%;
    grid-row: 5;
   
`
const ContactMeHeader = styled.h2`
    grid-column: 2/5;
    grid-row: 5;
    font-size: 4em;
    font-weight: 900;
    color: #2892F4;
`
const ContactList = styled.ul`
    grid-column: 2/6;
    grid-row: 7/12;
    & li::before{
        content: "- ";
    }
    & li{
        color: #2892F4;
        margin: 30px;
        font-weight: 700;
        font-size: 3em;
    }
`

const contact = () => {
    return(
        <Layout>
            <Header/>
            <ContactMeHeader>Skontaktuj się ze mną!</ContactMeHeader>
            <ContactMeImg src={contactImg}/>
            <ContactList>
                <li>Email: kamil.michna28@gmail.com</li>
                <li>Linkedin: <a href="https://www.linkedin.com/in/michnakamil/">linkedin.com/in/michnakamil</a></li>
            </ContactList>
        </Layout>
    )
}
export default contact;