import ContactUs from './ContactUs';
import Team from './Team';
import Faq from './Faq';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import Countdown from './Countdown';
import Tracks from './Tracks';
import About from './About';

import React from "react";
import "./styles/home.css";

import "../fonts/fonts.css";
import "../fonts/marcellus-sc/MarcellusSC-Regular.ttf";
import "../fonts/grim-reaper-font/GrimReaper-jEBRO.ttf";

import icebg from '../assets/art3.png';
import art7 from '../assets/art7(1).png';
import art5 from '../assets/art6(1).png'
import art10 from '../assets/art10.png';
import art11 from '../assets/art12.png';
import art13 from '../assets/art13.png';
import art14 from '../assets/art14.png';


import Hero from "./Hero";

const Home = () => {
    
    return (
        
        <main>
           
            <section className="bg-section">
                <img className="bg" src={icebg} alt="ice" />
                <img className="bg2" src={art5} alt="bg" />
                <img className="bg3" src={art7} alt="bg" />
                <img className="bg4" src={art10} alt="bg" />
                <img className="bg5" src={art11} alt="bg" />
                <img className="bg6" src={art13} alt="bg" />
                <img className="bg7" src={art14} alt="bg" />
                <img className="bg8" src={art14} alt="bg" />
                <img className="bg9" src={art14} alt="bg" />
            </section>
            <Hero />
            <About />
            <Tracks />
            <Countdown />
            <Schedule />
            <Sponsors />
            <Faq />
            <Team />
            <ContactUs />
            <div className="happyhacking">
                <h1>HAPPY HACKING!</h1>
                <p>Made with ♡</p>
                <br/>
            </div>
        </main>
    );

}
export default Home;