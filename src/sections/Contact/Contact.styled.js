import styled from 'styled-components';
import {SectionContainer} from '../../components/Section/Section.styled';
export const ContactSection = styled(SectionContainer)`
    background-color: #fff;
    height: 100vh;
    grid-template-rows: repeat(10,10vh);
    z-index: 1;
`

export const ContactHeader = styled.h3`
    grid-column: 2/5;
    grid-row: 2;
    font-weight: 900;
    font-size: 70px;
`
export const ContactForm = styled.form`
display: grid;
grid-template-columns: repeat(12,1fr);
grid-template-rows: repeat(12,1fr);
    grid-row: 4/11;
    grid-column: 2/9;
    background-color: black;
    .reply_to{
        grid-column: 2/9;
        grid-row: 2;
        padding-left: 30px;
        font-size: 20px;
    }
    textarea{
        grid-column: 2/10;
        grid-row: 4/10;
        padding-left: 30px;
        padding-top: 30px;
        resize: none;
        font-size: 15px;
    }
    .send_mail{
        grid-column: 2/4;
        grid-row: 11;
        border:0px;
        background-color: white;
        font-size: 15px;
        /* position: relative; */
        font-weight: 700;
    }
    *{
        &:hover, :focus{
            border: 4px solid #15A873;
        }
    }
`