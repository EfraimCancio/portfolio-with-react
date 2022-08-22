import React from 'react';
import "./Services.css";
import Card from "../Card/Card"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Services = () => {

    const transition = { duration: 1, type: 'spring' };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br/>
                    Dolore minima sapiente magni minus.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#abf1ff" }}></div>
            </div>
            <div className="cards">
                <motion.div 
                whileInView={{ left: '14rem'}}
                initial={{ left: '25rem'}}
                transition={transition}
                style={{ left: "14rem"}}
                >
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Gimp, Adoobe"}
                    />
                </motion.div> 
                <motion.div 
                style={{ top: "12rem", left: "-4rem"}}
                >
                    <Card
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {"HTML, Css, Javascript, React"}
                    />
                </motion.div>
                <motion.div 
                style={{ top: "19rem", left: "12rem"}}
                >
                    <Card
                        emoji = {Humble}
                        heading = {'UX/UI'}
                        detail = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services;