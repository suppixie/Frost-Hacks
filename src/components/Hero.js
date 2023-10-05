import React from "react";
import snowboy from '../assets/Snowboy.gif';
import rocks from '../assets/rocks5.png'
import Navbar from "./Navbar";
export default function Hero() {
    return <><div className="snowboy-animation">
        <img src={snowboy} className="snowboy" alt="animation" />
    </div>
        <section className="hero">
            <Navbar />
            <div className="event-details">
                <h1>FROST HACKS</h1>
                <h4>Get ready to embark on a Winter Innovation Odyssey!</h4>
                <h3>Dec 2-3 2023 | IARE, Hyderabad</h3>
                <div className="hero-btns">
                    <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn">Register</button></a>
                    <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn">Discord</button></a>
                </div>
                <div className="rock-mountain">
                    <img src={rocks} className="rocks" alt="prop" />
                </div>
            </div>

        </section></>;
}
