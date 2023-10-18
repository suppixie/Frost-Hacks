import React from "react";
// import snowboy from '../assets/Snowboy.gif';
import { Link } from "react-router-dom";
import rocks from '../assets/Snowboy on mountain.gif'
import Navbar from "./Navbar";
import '../components/styles/hero.css'
import Filler from '../components/filler';
// import discord from '../assets/icons8-discord-100.png';

export default function Hero() {
    return <>
        <div className="snowboy-animation">
            {/* <img src={snowboy} className="snowboy" alt="animation" /> */}
        </div>
        <section className="hero">
            <Navbar />
            <div className="event-details">
                <h1>FROST HACKS</h1>
                <h4>Get ready to embark on a Winter Innovation Odyssey!</h4>
                <h3>Jan 6-7 2024 | IARE, Hyderabad</h3>
                <div className="hero-btns">
                    {/* <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn">Register</button></a> */}
                    <Link to={Filler}><button className="register-btn">Register</button></Link>
                    {/* <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn">Discord</button></a> */}
                    
                </div>
                <div className="rock-mountain">
                    <img src={rocks} className="rocks" alt="prop" />
                </div>
            </div>

        </section></>;
}
