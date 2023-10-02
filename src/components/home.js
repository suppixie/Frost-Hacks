import React from "react";
import { Link } from "react-router-dom";
import "../components/home.css";


import icebg from '../assets/art3.png'
import icebg2 from '../assets/art7.png';
import art5 from '../assets/art6.png'
import art10 from '../assets/art10.png';
import art11 from '../assets/art12.png';
import art13 from '../assets/art13.png';
import lamp from '../assets/checkpoint.png';
import teleporter from '../assets/teleporter_active.gif';
import rocks from '../assets/rocks5.png'
import crystal1 from '../assets/sculpture1.png';
import crystal2 from '../assets/sculpture2.png';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';
import tree from '../assets/trees1.png';
import hr from '../assets/hr.png';
import light from '../assets/light.png';
import frame8 from '../assets/frame1.png'
import snow from '../assets/snow 11.png'
import me from '../assets/team/me.jpeg';
import mythri2 from '../assets/team/mythri2.jpg';
import harshitha from '../assets/team/harshitha.jpg';
import nayan from '../assets/team/nayan.jpeg';
import sneha from '../assets/team/sneha.jpg';
import shruti from '../assets/team/shruti.jpg';
import crystalonrock from '../assets/crystal-rock crystal.png';
import rockholder from '../assets/crystal-rock.png'
import snow3 from '../assets/snow 3.png';
import card from '../assets/scroll1.png';
import card2 from '../assets/scroll1.png';



function Home(){
    return(
        <main>
            <section className="bg-section">
            <img className="bg"  src={icebg} alt="ice"/>
                <img className="bg2" src={art5} />
                <img className="bg3" src={icebg2} />
                <img className="bg4" src={art10} />
                <img className="bg5" src={art11} />
                <img className="bg6" src={art13} />
            </section>
            <section className="hero">
                <nav>
                    {/* <img src={logo} alt="logo"/> */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Schedule</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
                <div className="event-details">
                <h1>Frost Hacks</h1>
                <h3>Dec 2-3 2023 | IARE, Hyderabad</h3>
                <div className="hero-btns">
                <button className="register-btn"><a href="https://lu.ma/event/evt-DbAIZ0uCNtCTWj3" target="_blank">Register</a></button>
                <button className="discord-btn">Discord</button>
                </div>
                </div>
                <img src={rocks} className="rocks"/>

            </section>
            <section className="coldboy">
                <div className="boy-animation"></div>
            </section>
            <section className="about-section">
            <div className="about">
                {/* <img src={trees} className="trees"/> */}
                <div className="crystal-rock">
                    <img src={crystalonrock} className="crystal-on-rock"/>
                    <img src={rockholder} className="rock-holder"/>
                </div>
                <div className="info">
                <h1>ABOUT</h1>
                <p>FROST HACK, a thrilling 30-hour hackathon held at the prestigious Institute of Aeronautical Engineering (IARE),
                     extends a warm invitation to all students who share a burning passion for coding, regardless of your current skill level, 
                     there are no boundaries to your creativity. Our goal is to inspire participants to push their limits,
                      unleash their boundless creativity, and take significant strides towards honing their coding prowess.
                    Join us to push the limits of your coding abilities and embark on a journey of continuous improvement.
                </p>
                {/* <img src={snow3} className="snow3"/> */}
                </div>
            </div>
            </section>
            <section className="tracks-section">
                <h2>TRACKS</h2>
                <div className="tracks">
                    <div className="track1 themes">
                        <img src={crystal1} className="crystal"/>
                        <h1>Health & Wellness</h1>
                        <p>Unlock  the potential for transformation in health and wellness within the society,
                         as we  aim to innovate and enhance in one concerted effort.</p>
                    </div>
                    <div className="track2 themes">
                        <img src={crystal2} className="crystal"/>
                        <h1>Social<br/> Good</h1>
                        <p>Dedicated to the greater good, creating a positive impact on society while addressing pressing social issues.</p>
                    </div>
                    <div className="track3 themes">
                        <img src={crystal3} className="crystal"/>
                        <h1>Web<br/> 3.0</h1>
                        <p>Web 3.0 is the new digital realm. The decentralized, inter-connected, user-centric, and secure evolution of the internet.</p>
                    </div>
                    <div className="track4 themes">
                        <img src={crystal4} className="crystal"/>
                        <h1>Open Innovation</h1>
                        <p>We embrace the idea that innovation can originate from anywhere and actively tap into diverse minds for great ideas.
</p>
                    </div>
                </div>
                <img src={teleporter} className="teleporter"/>
            </section>
            <section className="countdown-section">
            <div className="countdown">
                <h1>Hackathon begins in</h1>
                <iframe className="countdown-date" src="https://www.tickcounter.com/widget/countdown/4490171" ></iframe>
                </div>
            </section>
            <section className="schedule-section">
                {/* <img src={light} className="light"/> */}
                <div className="schedule-container">
                <h2>SCHEDULE</h2>
                <div className="schedule">
                    <div className="day1">
                    <img src={frame8} className="frame8"/>
                    {/* <img src={card} className="card"/> */}
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
                        {/* <img src={snow} className="snow1"/> */}
                    </div>
                    <div className="day2">
                    <img src={frame8} className="frame9"/>
                    {/* <img src={card2} className="card2"/> */}
                        <h1>SUNDAY</h1>
                        <div className="timeline">
                        <p>Breakfast</p> <p>8:00 AM</p>
                        <p>Workshop 2 Begins</p> <p>11:00 AM</p>
                        <p>Mini event</p> <p>2:00 PM</p>
                        <p>Lunch</p> <p>3:00 PM</p>
                        <p>Submissions Due</p> <p>5:30 PM</p>
                        <p>Hackathon ends</p> <p>6:00 PM</p>
                        <p>Mini event</p> <p>6:30 PM</p>
                        <p>Closing ceremony</p> <p>7:00 PM</p>
                        </div>
                        {/* <img src={snow} className="snow2"/> */}
                    </div>
                    </div>
                </div>
            </section>
            <section className="sponsor-section">
                <div className="sponsors">
                    <h1>Sponsors</h1>
                    <h3>To be announced soon...</h3>
                </div>
            </section>
            <section className="faq-section">
            <img src={tree} className="tree"/>
                <div className="question-container">
                    <h1>FAQ</h1>
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
                <h1>Meet Our Team</h1>
                <div className="team-container">
                <div><img src={harshitha} className="team-pic"/> <p>Harshitha ⚡</p></div>
                <div><img src={mythri2} className="team-pic"/><p>Mythri 💃</p></div>
                <div><img src={me} className="team-pic"/><p>Mamtha 🍉</p></div>
                <div><img src={sneha} className="team-pic"/><p>Sneha 🌞</p></div>
                <div><img src={nayan} className="team-pic"/><p>Nayan ⚔️</p></div>
                <div><img src={shruti} className="team-pic"/><p>Shruti 👑</p></div>
                </div>
            </section>
        </main>
    )

}
export default Home;