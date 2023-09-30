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
import scroll from '../assets/scroll1.png';
import light from '../assets/light.png';





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
                <h3>Dec 2-3 2023 | Hyderabad</h3>
                <div className="hero-btns">
                <button className="register-btn">Register</button>
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
                <img src={lamp} className="lamp"/>
                <div className="info">
                <h1>ABOUT</h1>
                <p>FROST HACK, a thrilling 30-hour hackathon held at the prestigious Institute of Aeronautical Engineering (IARE),
                     extends a warm invitation to all students who share a burning passion for coding, regardless of your current skill level, 
                     there are no boundaries to your creativity. Our goal is to inspire participants to push their limits,
                      unleash their boundless creativity, and take significant strides towards honing their coding prowess.
                    Join us to push the limits of your coding abilities and embark on a journey of continuous improvement.
                </p>
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
                <img src={light} className="light"/>
                <div className="schedule-container">
                <h1>SCHEDULE</h1>
                <div className="schedule">
                    <div className="day1">
                    {/* <img src={scroll} className="scroll1"/> */}
                        <h1>SATURDAY</h1>
                        <div className="timeline">
                        <p>Check-in</p> <p>9:30 AM</p>
                        <p>Opening Ceremony</p> <p>10:30 AM</p>
                        <p>Hackathon begins</p> <p>11:00 AM</p>
                        <p>Lunch</p> <p>3:00 PM</p>
                        <p>Workshop 1</p> <p>5:00 PM</p>
                        <p>Mini event</p> <p>7:00 PM</p>
                        <p>Dinner</p> <p>9:00 PM</p>
                        <p>Midnight Snacks & Surprise</p> <p>12:00 AM</p>
                        </div>
                    </div>
                    <div className="day2">
                    {/* <img src={scroll} className="scroll2"/> */}
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
                    </div>
                    </div>
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
                    <p className="answer">FROST HACKS is a thrilling 24-hour hackathon hosted at the prestigious Institute of Aeronautical Engineering (IARE) that invites students with a passion for coding, regardless of their skill level, to unleash their creativity and enhance their coding abilities.</p>
                </div>

                <div className="questions">
                <input hidden  type="checkbox" id="question2" class="question-checkbox" />
                <label for="question2" className="question-label">
                    <h4>When and where will FROST HACKS 2023 take place?</h4>
                    <span>&#9660;</span>
                    </label>
                    <p className="answer">FROST HACKS 2023 will be held on December 2nd to 3rd 2023 at the Institute of Aeronautical Engineering (IARE)</p>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question3" class="question-checkbox" />
                <label for="question3" className="question-label">
                    <h4>How can I stay updated about FROST HACKS and receive event-related information?</h4>
                    <span>&#9660;</span>
                    </label>
                    <p className="answer">Stay connected with us by joining our discord server. We'll keep you informed about the latest news and exciting developments.</p>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Will food be provided?</h4>
                    <span>&#9660;</span>
                </label>
                    <p className="answer">We've got lots of food and snacks for everyone, stay hacky and hydrated</p>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Who can Participate?</h4>
                    <span>&#9660;</span>
                </label>
                    <p className="answer">We welcome undergraduates and graduate students of all majors, backgrounds, and skill level to come create.
                    Unfortunately, if you are under 18, you will not be able to attend.</p>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Is there any Registration fee?</h4>
                    <span>&#9660;</span>
                </label>
                    <p className="answer">FROST HACKS is absolutely free for everyone to attend.</p>
                </div>

                <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>I have more questions</h4>
                    <span>&#9660;</span>
                </label>
                    <p className="answer">You can mail us at info@frosthacks.org or reach out on instagram @frosthacks.iare</p>
                </div>
                </div>
            </section>
            <section className="contact-section">
            </section>
        </main>
    )

}
export default Home;