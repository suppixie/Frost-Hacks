import React from "react";
import icebg from '../assets/art3.png'
import icebg2 from '../assets/art3 - Copy.png'
import tree from '../assets/trees1.png';
import { Link } from "react-router-dom";
import "../components/home.css";

function Home(){
    return(
        <main>
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
                <button className="register">Register</button>
                </div>
                <img className="bg"  src={icebg} alt="ice"/>
                <img className="bg2" src={icebg2} />

                
            </section>
            <section className="about-section">
            <div className="about">
                <h1>ABOUT</h1>
                <h3>FROST HACK, a thrilling 30-hour hackathon held at the prestigious Institute of Aeronautical Engineering (IARE),
                     extends a warm invitation to all students who share a burning passion for coding, regardless of your current skill level, 
                     there are no boundaries to your creativity. Our goal is to inspire participants to push their limits,
                      unleash their boundless creativity, and take significant strides towards honing their coding prowess.
                    Join us to push the limits of your coding abilities and embark on a journey of continuous improvement.
                </h3>
            </div>
            </section>
            <section className="tracks-section">
                <div className="tracks">
                    <div className="track1 themes">
                        {/* <img src={crystal1} alt="crystal"/> */}
                        <h3>Health and Wellness</h3>
                    </div>
                    <div className="track2 themes">
                        {/* <img src={crystal2} alt="crystal"/> */}
                        <h3>Social Good</h3>
                    </div>
                    <div className="track3 themes">
                        {/* <img src={crystal3} alt="crystal"/> */}
                        <h3>Web 3.0</h3>
                    </div>
                    <div className="track4 themes">
                        {/* <img src={crystal4} alt="crystal"/> */}
                        <h3>Open Innovation</h3>
                    </div>
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