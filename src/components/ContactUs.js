import React from "react";
import light2 from '../assets/light1.png'
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.png";
import devpost from "../assets/devpost.png";
import coc from "../assets/coc.png";
import twitter from "../assets/twitter.png";
import sponsor from "../assets/sponsor.png";

export default function ContactUs() {
    return <section className="contact-section" id="contact">
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="socials">
                <div>
                    <div className="social-icons">
                        <img src={mail} className="icons" alt="icon" />
                        {
                            /* <img src={iceblock} className="iceblock"/> */
                        }
                    </div>
                    <a href="mailto:info@frosthacks.org">info@frosthacks.org</a>
                </div>

                <div>
                    <div className="social-icons">
                        <img src={instagram} className="icons" alt="icon" />
                    </div>
                    <a href="https://instagram.com/frosthacks.iare?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">@frosthacks.iare</a>
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
                    <a href="/" target="_blank" rel="noreferrer">Follow Us (X)</a>
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
                    <a href="/" target="_blank" rel="noreferrer">MLH Code of Conduct</a>
                </div>
            </div>
        </div>
        <div>
            <img src={light2} className="light2" alt="prop" />
            <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn2 ">Register</button></a>
            <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn2">Discord</button></a>
        </div>
    </section>;
}
