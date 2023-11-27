import React from "react";
import './styles/sponsors.css'
import mlhlogo from '../assets/mlh-logo.png';
import githublogo from '../assets/githublogo.png';
import advantagelogo from '../assets/Advantage.png';

export default function Sponsors() {
    return <section className="sponsor-section">
        <div className="sponsors">
            <h1>Sponsors</h1>
            <div className="sponsor-list">
            <img  className="sponsor-logo" src={mlhlogo} alt="mlh logo"/>
            <div className="advantagelogo sponsor-logo"><img src={advantagelogo}  alt="advantagelogo"/>
                    <p>AdVantage<br/>Community</p></div>
                    <img className="sponsor-logo" src={githublogo} alt="github"/>
                    </div>
        </div>
    </section>;
}
