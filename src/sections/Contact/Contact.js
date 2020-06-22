import React, { useEffect,useRef } from "react";
import gsap from "gsap"; 
import {ContactSection,ContactHeader,ContactForm} from './Contact.styled';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const Contact = (props) => {
    const contactForm = useRef(null);
    const contactHeader = useRef(null);
    useEffect(()=>{
        if (typeof window !== 'undefined'){
            const controller =  new ScrollMagic.Controller();
            ScrollMagicPluginGsap(ScrollMagic, gsap);
            new ScrollMagic.Scene({
                triggerElement: contactHeader.current,
                reverse: false
            }).setTween(gsap.from(contactForm.current, 2, {
                    x: 5000,
                    ease: "expo.out"
            })
            ).addTo(controller);
        }
    },[])
    return (
        <ContactSection>
            <ContactHeader ref={contactHeader}>Contact me</ContactHeader>
            <ContactForm ref={contactForm} action='https://formspree.io/xayyagnn' method="POST">
                <input id='_replyto' className='reply_to'  type="email" name="_replyto" placeholder="Your email" required/>
                <textarea id='content' placeholder="Your message" name="content" required>
                </textarea>
                <input type='submit' className='send_mail' value='Send email'/>
            </ContactForm>
        </ContactSection>
    )
}
export default Contact;