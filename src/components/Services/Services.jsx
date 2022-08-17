import React from 'react';
import "./Services.css";
import Card from "../Card/Card"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf";

const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
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
                <div style={{ left: "14rem"}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Gimp, Adoobe"}
                    />
                </div> 
                <div style={{ top: "12rem", left: "-4rem"}}>
                    <Card
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {"HTML, Css, Javascript, React"}
                    />
                </div>
                <div style={{ top: "19rem", left: "12rem"}}>
                    <Card
                        emoji = {Humble}
                        heading = {'UX/UI'}
                        detail = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services;