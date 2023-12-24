import React from "react";
import { Link } from "react-router-dom";
import wandgif from '../assets/wand gif.gif'
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.png";
import devpost from "../assets/devpost.png";
import coc from "../assets/coc.png";
import twitter from "../assets/twitter.png";
import sponsor from "../assets/sponsor.png";
import community from "../assets/community.png";
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
                    <a href="https://www.instagram.com/frosthacks.hyd/" target="_blank" rel="noreferrer">@frosthacks.hyd</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={devpost} className="icons devpost" alt="icon" />
                    </div>
                    <a href="https://frosthacks.devpost.com/" target="_blank" rel="noreferrer"> Share on Devpost</a>
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
                    <Link to='/Sponsors'>Sponsor Us</Link>
                </div>
                <div>
                    <div className="social-icons">
                        <img src={community} className="icons sponsor" alt="icon" />
                    </div>
                    <a href="https://forms.gle/9VB3ZBdu6KpzQ3U99" target="_blank" rel="noreferrer">Community Partners Form</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={coc} className="icons coc" alt="icon" />
                    </div>
                    <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">MLH Code of Conduct</a>
                </div>
                <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn">Register</button></a>
                {/* <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn2 ">Register</button></a> */}
            {/* <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn2">Discord</button></a> */}
            </div>
        </div>
       
    </section>;
}
