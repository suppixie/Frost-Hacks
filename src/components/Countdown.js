import React from "react";
import './styles/countdown.css'

export default function Countdown() {

    return <section className="countdown-section">
        <div className="countdown">
            <h1>Hackathon<br />begins in</h1>
            <iframe title="countdown" className="countdown-date" src="https://www.tickcounter.com/widget/countdown/4659104"></iframe>
        </div>
    </section>;
}
