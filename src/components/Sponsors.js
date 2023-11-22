import React from "react";
import './styles/sponsors.css'
import mlhlogo from '../assets/mlh-logo.png';

export default function Sponsors() {
    return <section className="sponsor-section">
        <div className="sponsors">
            <h1>Sponsors</h1>
            <img  className="mlh-sponsor" src={mlhlogo} alt="mlh logo"/>
        </div>
    </section>;
}
