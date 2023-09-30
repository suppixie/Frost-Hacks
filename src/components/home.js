import React from "react";
import { Link } from "react-router-dom";
import "../components/home.css";


import icebg from '../assets/art3.png'
import icebg2 from '../assets/art7.png';
import art5 from '../assets/art6.png'
import art10 from '../assets/art10.png';
import lamp from '../assets/checkpoint.png';
import teleporter from '../assets/teleporter_active.gif';
import rocks from '../assets/rocks5.png'
import crystal1 from '../assets/sculpture1.png';
import crystal2 from '../assets/sculpture2.png';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';





function Home(){
    return(
        <main>
            <section className="bg-section">
            <img className="bg"  src={icebg} alt="ice"/>
                <img className="bg2" src={art5} />
                <img className="bg3" src={icebg2} />
                <img className="bg4" src={art10} />


            

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
                <h3>Dec 2-3 2023</h3>
                <h3>Hyderabad</h3>
                <button className="register-btn">Register</button>
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
                <h2>Tracks</h2>
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
                <div className="schedule">
                    <div className="day1">
                        <h1>SATURDAY</h1>
                        <div className="timeline">
                        <p>Check-in</p> <p>9:30 AM</p>
                        <p>Event Begins</p> <p>11:00 AM</p>
                        </div>
                    </div>
                    <div className="day2">
                        <h1>SUNDAY</h1>
                        <div className="timeline">
                        <p>Breakfast</p> <p>8:00 AM</p>
                        <p>Event Begins</p> <p>11:00 AM</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-section">
                <div className="questions">
                    <h4>what is Frost Hacks?</h4>
                    <p>FROST HACKS is a thrilling 24-hour hackathon hosted at the prestigious Institute of Aeronautical Engineering (IARE) that invites students with a passion for coding, regardless of their skill level, to unleash their creativity and enhance their coding abilities.</p>
                </div>
                <div className="questions">
                    <h4>When and where will FROST HACKS 2023 take place?</h4>
                    <p>FROST HACKS 2023 will be held on December 2nd to 3rd 2023 at the Institute of Aeronautical Engineering (IARE)</p>
                </div>
                <div className="questions">
                    <h4>How can I stay updated about FROST HACKS and receive event-related information?</h4>
                    <p>Stay connected with us by joining our discord server. We'll keep you informed about the latest news and exciting developments.</p>
                </div>
                <div className="questions">
                    <h4>Will food be provided?</h4>
                    <p>We've got lots of food and snacks for everyone, stay hacky and hydrated</p>
                </div>
            </section>
            <section className="contact-section">
            </section>
        </main>
    )

}
export default Home;