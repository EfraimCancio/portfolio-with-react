import React from 'react';
import './Footer.css';

// Background image
import Wave from '../../img/wave.png';

// Icons
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Guithub from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>efraimfonseca@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Guithub color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer;