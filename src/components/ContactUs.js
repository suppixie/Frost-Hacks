import React from "react";
import { Link } from "react-router-dom";
import wandgif from '../assets/wand gif.gif'
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.png";
import devpost from "../assets/devpost.png";
import coc from "../assets/coc.png";
import twitter from "../assets/twitter.png";
import sponsor from "../assets/sponsor.png";
import './styles/contactUs.css'

export default function ContactUs() {
    return <section className="contact-section" id="contact">
        <div className="contact">
        <div className="heading">
            <h1>Contact Us</h1>
            <div className="wand">
            <img src={wandgif} className="wandgif" alt="prop" /></div>
            </div>
            <div className="socials">
                <div>
                    <div className="social-icons">
                        <img src={mail} className="icons" alt="icon" />
                        {
                            /* <img src={iceblock} className="iceblock"/> */
                        }
                    </div>
                    <a href="mailto:frosthackshyd@gmail.com">frosthackshyd@gmail.com</a>
                </div>

                <div>
                <div className="social-icons">
                        <img src={instagram} className="icons instagram" alt="icon" />
                    </div>
                    <a href="https://www.instagram.com/frosthacks.iare/" target="_blank" rel="noreferrer">@frosthacks.iare</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={devpost} className="icons devpost" alt="icon" />
                    </div>
                    <a href="/" target="_blank" rel="noreferrer"> Share on Devpost</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={twitter} className="icons twitter" alt="icon" />
                    </div>
                    <a href="https://twitter.com/frosthackshyd" target="_blank" rel="noreferrer">Follow Us (Twitter)</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={sponsor} className="icons sponsor" alt="icon" />
                    </div>
                    <a href="/" target="_blank" rel="noreferrer">Sponsor Us</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={coc} className="icons coc" alt="icon" />
                    </div>
                    <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">MLH Code of Conduct</a>
                </div>
                <Link to='/Registration'><button className="register-btn2 ">Register</button></Link>
                {/* <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn2 ">Register</button></a> */}
            {/* <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn2">Discord</button></a> */}
            </div>
        </div>
       
    </section>;
}
