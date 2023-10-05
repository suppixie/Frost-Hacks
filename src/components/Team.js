import React from "react";
import me from '../assets/team/me1.jpeg';
import mythri2 from '../assets/team/mythri2.jpg';
import harshitha from '../assets/team/harshitha.jpg';
import nayan from '../assets/team/nayan.jpeg';
import sneha from '../assets/team/sneha.jpg';
import shruti from '../assets/team/shruti.jpg';
import wand from '../assets/wand.png'
import './styles/team.css'


export default function Team() {
    return <section className="team-section">
        <div>
            <h1>Meet Our Team</h1>
            <div className="team-container">
                <div>
                    <div className="member">
                        <img src={harshitha} className="team-pic" alt="team" /> <p>Harshitha ⚡</p></div>
                    {
                        /* <img src={spikes} className="spikes"/> */
                    }
                </div>
                <div>
                    <div className="member">
                        <img src={mythri2} className="team-pic" alt="team" /><p>Mythri 💃</p></div>
                </div>
                <div>
                    <div className="member">
                        <img src={me} className="team-pic" alt="team" /><p>Mamtha 🍉</p></div>
                </div>
                <div>
                    <div className="member">
                        <img src={sneha} className="team-pic" alt="team" /><p>Sneha 🌞</p></div>
                </div>
                <div>
                    <div className="member">
                        <img src={nayan} className="team-pic" alt="team" /><p>Nayan ⚔️</p></div>
                </div>
                <div>
                    <div className="member">
                        <img src={shruti} className="team-pic" alt="team" /><p>Shruti 👑</p></div>
                </div>
            </div>
            <img src={wand} className="wand" alt="prop" />
        </div>
    </section>;
}
