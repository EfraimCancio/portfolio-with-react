import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k113ys7', 'template_137wcpl', form.current, 'BkOLeEFbL0D4s2o8V')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white' : ''}}>get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="e-mail" name="user_email" className="user" placeholder="E-mail"/>
                    <textarea name="message" className="user" placeholder="Message" rows="10"></textarea>
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contactin me!"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;