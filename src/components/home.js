import React from "react";
import "../components/home.css";

import "../fonts/fonts.css";
import "../fonts/breathe-fire-iii-font/BreatheFireIii-PKLOB.ttf";
import "../fonts/death-star-font/DeathStar-VmWB.ttf";
import "../fonts/grim-reaper-font/GrimReaper-jEBRO.ttf";
import logo from "../assets/logo2 (1).png";
import icebg from '../assets/art3.png';
import art7 from '../assets/art7(1).png';
import art5 from '../assets/art6(1).png'
import art10 from '../assets/art10.png';
import art11 from '../assets/art12.png';
import art13 from '../assets/art13.png';
import art14 from '../assets/art14.png';
import light2 from '../assets/light1.png'
import teleporter from '../assets/teleporter_active.gif';
import rocks from '../assets/rocks5.png'
import crystal1 from '../assets/crystal2.png';
import crystal2 from '../assets/crystal11.png';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';
import tree from '../assets/trees1.png';
import me from '../assets/team/me1.jpeg';
import mythri2 from '../assets/team/mythri2.jpg';
import harshitha from '../assets/team/harshitha.jpg';
import nayan from '../assets/team/nayan.jpeg';
import sneha from '../assets/team/sneha.jpg';
import shruti from '../assets/team/shruti.jpg';
import crystalonrock from '../assets/crystal-rock crystal.png';
import rockholder from '../assets/crystal-rock.png'
import wand from '../assets/wand.png'
import snowboy from '../assets/Snowboy.gif';
// import mushroomrock from "../assets/ice props.png";
// import iceblock from "../assets/ice blocks1.png";
import mail from "../assets/mail.png";
import instagram from "../assets/instagram.png";
import devpost from "../assets/devpost.png";
import coc from "../assets/coc.png";
import twitter from "../assets/twitter.png";
import sponsor from "../assets/sponsor.png";
import iceblock2 from "../assets/ice blocks2.png";
import iceblock3 from "../assets/ice blocks3.png"



function Home(){
    return(
        <main>
            <section className="bg-section">
            <img className="bg"  src={icebg} alt="ice"/>
                <img className="bg2" src={art5} alt="bg"/>
                <img className="bg3" src={art7} alt="bg" />
                <img className="bg4" src={art10} alt="bg" />
                <img className="bg5" src={art11} alt="bg" />
                <img className="bg6" src={art13} alt="bg" />
                <img className="bg7" src={art14} alt="bg" />
            </section>
            <div className="snowboy-animation">
                <img src={snowboy} className="snowboy" alt="animation"/>
            </div>
            <section className="hero">
                <div className="navbar">
                    <img src={logo} className="logo" alt="logo"/>
                    <ul>
                        <li><a href="/" >Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tracks">Tracks</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="/">Prizes</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="event-details">
                <h1>FROST HACKS</h1>
                <h4>Get ready to embark on a Winter Innovation Odyssey!</h4>
                <h3>Dec 2-3 2023 | IARE, Hyderabad</h3>
                <div className="hero-btns">
                <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn">Register</button></a>
                <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn">Discord</button></a>
                </div>
                <div className="rock-mountain">
                <img src={rocks} className="rocks" alt="prop"/>
                </div>
                </div>

            </section>
            <section className="about-section" id="about">
            <div className="about">
                {/* <img src={trees} className="trees"/> */}
                <div className="crystal-rock">
                    <img src={crystalonrock} className="crystal-on-rock" alt="prop"/>
                    <img src={rockholder} className="rock-holder" alt="prop"/>
                </div>
                <div className="info">
                <h1>About</h1>
                {/* <img src={snow3} className="snow3"/> */}
                <p>FROST HACK, a thrilling 30-hour hackathon held at the prestigious Institute of Aeronautical Engineering (IARE),
                     extends a warm invitation to all students who share a burning passion for coding, regardless of your current skill level, 
                     there are no boundaries to your creativity. Our goal is to inspire participants to push their limits,
                      unleash their boundless creativity, and take significant strides towards honing their coding prowess.
                    Join us to push the limits of your coding abilities and embark on a journey of continuous improvement.
                </p>
                </div>
            </div>
            </section>
            <section className="tracks-section" id="tracks">
                <h2>Tracks</h2>
                <div className="tracks">
                    <div className="track1 themes">
                        <img src={crystal1} className="crystal" alt="prop"/>
                        <h1>Health & Wellness</h1>
                        <p>Unlock  the potential for transformation in health and wellness within the society,
                         as we  aim to innovate and enhance in one concerted effort.</p>
                    </div>
                    <div className="track2 themes">
                        <img src={crystal2} className="crystal" alt="prop"/>
                        <h1>Social<br/> Good</h1>
                        <p>Dedicated to the greater good, creating a positive impact on society while addressing pressing social issues.</p>
                    </div>
                    <div className="track3 themes">
                        <img src={crystal3} className="crystal" alt="prop"/>
                        <h1>Web<br/> 3.0</h1>
                        <p>Web 3.0 is the new digital realm. The decentralized, inter-connected, user-centric, and secure evolution of the internet.</p>
                    </div>
                    <div className="track4 themes">
                        <img src={crystal4} className="crystal" alt="prop"/>
                        <h1>Open Innovation</h1>
                        <p>We embrace the idea that innovation can originate from anywhere and actively tap into diverse minds for great ideas.
</p>
                    </div>
                </div>
                <img src={teleporter} className="teleporter" alt="prop"/>
            </section>
            <section className="countdown-section">
            <div className="countdown">
                <h1>Hackathon<br/>begins in</h1>
                {/* <img src={snow2} className="snow2"/> */}
                <iframe title="countdown" className="countdown-date" src="https://www.tickcounter.com/widget/countdown/4490171" ></iframe>
                </div>
            </section>
            <section className="schedule-section" id="schedule">
                <div className="schedule-container">
                <h2>Schedule</h2>
                <div className="schedule">
                <img src={iceblock2} className="iceblock2" alt="prop"/>
                    <div className="day1">
                        <h1>SATURDAY</h1>
                        <div className="timeline">
                        <p>Check-in</p> <p>9:30 AM</p>
                        <p>Opening Ceremony</p> <p>10:30 AM</p>
                        <p>Hackathon begins</p> <p>11:00 AM</p>
                        <p>Lunch</p> <p>3:00 PM</p>
                        <p>Workshop 1</p> <p>5:00 PM</p>
                        <p>Mini event</p> <p>7:00 PM</p>
                        <p>Dinner</p> <p>9:00 PM</p>
                        <p>Midnight Snacks <br/>& Surprise</p> <p>12:00 AM</p>
                        </div>
                    </div>
                    <p></p>
                    <div className="day2">
                    {/* <img src={frame8} className="frame9"/> */}
                        <h1>SUNDAY</h1>
                        <div className="timeline">
                        <p>Breakfast</p> <p>8:00 AM</p>
                        <p>Workshop 2 Begins</p> <p>11:00 AM</p>
                        <p>Mini event</p> <p>2:00 PM</p>
                        <p>Lunch</p> <p>3:00 PM</p>
                        <p>Submissions Due</p> <p>5:30 PM</p>
                        <p>Hackathon ends</p> <p>6:00 PM</p>
                        <p>Mini event</p> <p>6:30 PM</p>
                        <p>Closing<br/>Ceremony</p> <p>7:00 PM</p>
                        </div>
                    </div>
                    <img src={iceblock3} className="iceblock3" alt="prop"/>

                    </div>
                </div>
            </section>
            <section className="sponsor-section">
                <div className="sponsors">
                    <h1>Sponsors</h1>
                    <h2>To be announced soon...</h2>
                </div>
            </section>
            <section className="faq-section" >
                <div className="tree-img">
            <img src={tree} className="tree" alt="prop"/>
            </div>
                <div className="question-container" >
                    <h1 id="faq">Faq</h1>
                <div className="questions">
                <input hidden type="checkbox" id="question1" class="question-checkbox" />
                <label for="question1" className="question-label">
                    <h4>What is Frost Hacks?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>FROST HACKS is a thrilling 24-hour hackathon hosted at the prestigious Institute of Aeronautical Engineering (IARE) that invites students with a passion for coding, regardless of their skill level, to unleash their creativity and enhance their coding abilities.</p>
                </div>
                </div>

                <div className="questions">
                <input hidden  type="checkbox" id="question2" class="question-checkbox" />
                <label for="question2" className="question-label">
                    <h4>When and where will FROST HACKS 2023 take place?</h4>
                    <span>&#9660;</span>
                    </label>
                    <div className="answer">
                    <p >FROST HACKS 2023 will be held on December 2nd to 3rd 2023 at the Institute of Aeronautical Engineering (IARE)</p>
                    </div>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question3" class="question-checkbox" />
                <label for="question3" className="question-label">
                    <h4>How can I stay updated about FROST HACKS and receive event-related information?</h4>
                    <span>&#9660;</span>
                    </label>
                    <div className="answer">
                    <p>Stay connected with us by joining our discord server. We'll keep you informed about the latest news and exciting developments.</p>
                </div>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Will food be provided?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>We've got lots of food and snacks for everyone, stay hacky and hydrated</p>
                </div>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question5" class="question-checkbox" />
                <label for="question5" className="question-label">
                    <h4>Who can Participate?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p >We welcome undergraduates and graduate students of all majors, backgrounds, and skill level to come create.
                    Unfortunately, if you are under 18, you will not be able to attend.</p>
                </div>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question6" class="question-checkbox" />
                <label for="question6" className="question-label">
                    <h4>Is there any Registration fee?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>FROST HACKS is absolutely free for everyone to attend.</p>
                </div>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question7" class="question-checkbox" />
                <label for="question7" className="question-label">
                    <h4>I have more questions</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>You can mail us at info@frosthacks.org or reach out on instagram @frosthacks.iare</p>
                
                </div></div>
                </div>
            </section>
            <section className="team-section">
                <div>
                <h1>Meet Our Team</h1>
                <div className="team-container">
                <div>
                <div className="member">
                    <img src={harshitha} className="team-pic" alt="team"/> <p>Harshitha ⚡</p></div>
                    {/* <img src={spikes} className="spikes"/> */}
                    </div>
                    <div>
                <div className="member">
                    <img src={mythri2} className="team-pic" alt="team"/><p>Mythri 💃</p></div>
                    </div>
                    <div>
                <div className="member">
                    <img src={me} className="team-pic" alt="team"/><p>Mamtha 🍉</p></div>
                    </div>
                    <div>
                <div className="member">
                    <img src={sneha} className="team-pic" alt="team"/><p>Sneha 🌞</p></div>
                    </div>
                    <div>
                <div className="member">
                    <img src={nayan} className="team-pic" alt="team"/><p>Nayan ⚔️</p></div>
                    </div>
                    <div>
                <div className="member">
                    <img src={shruti} className="team-pic" alt="team"/><p>Shruti 👑</p></div>
                    </div>
                </div>
                <img src={wand} className="wand" alt="prop"/>
                </div>
            </section>
            <section className="contact-section" id="contact">
                <div className="contact">
                    <h1>Contact Us</h1>
                    <div className="socials">
                    <div>
                        <div className="social-icons">
                            <img src={mail} className="icons" alt="icon"/>
                            {/* <img src={iceblock} className="iceblock"/> */}
                        </div>
                    <a href="mailto:info@frosthacks.org">info@frosthacks.org</a>
                    </div>

                    <div>
                        <div className="social-icons">
                            <img src={instagram} className="icons" alt="icon"/>
                        </div>
                    <a href="https://instagram.com/frosthacks.iare?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">@frosthacks.iare</a>
                    </div>

                    <div>
                        <div className="social-icons">
                                <img src={devpost} className="icons devpost" alt="icon"/>
                        </div>
                    <a href="/" target="_blank" rel="noreferrer"> Share on Devpost</a>
                    </div>

                    <div>
                        <div className="social-icons">
                            <img src={twitter} className="icons twitter" alt="icon"/>
                        </div>
                    < a href="/" target="_blank" rel="noreferrer">Follow Us (X)</a>
                    </div>

                    <div>
                        <div className="social-icons">
                            <img src={sponsor} className="icons sponsor" alt="icon"/>
                        </div>
                    < a href="/" target="_blank" rel="noreferrer">Sponsor Us</a>
                    </div>

                    <div>
                        <div className="social-icons">
                            <img src={coc} className="icons coc" alt="icon"/>
                        </div>
                    < a href="/" target="_blank" rel="noreferrer">MLH Code of Conduct</a>
                    </div>
                    </div>
                </div>
                <div>
                <img src={light2} className="light2" alt="prop"/>
                <a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank" rel="noreferrer"><button className="register-btn2 ">Register</button></a>
                <a href="https://discord.gg/QSvZxgwU" target="_blank" rel="noreferrer"><button className="discord-btn2">Discord</button></a>
                </div>
                </section>
                <div className="happyhacking">
                    {/* <img src={mushroomrock} className="mushroomrock"/> */}
                    <h1>HAPPY HACKING!</h1>
                </div>
        </main>
    )

}
export default Home;