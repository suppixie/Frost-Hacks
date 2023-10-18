import React from "react";
import iceblock2 from "../assets/ice blocks2.png";
import iceblock3 from "../assets/ice blocks3.png"
import './styles/schedule.css'

export default function Schedule() {

    return <section className="schedule-section" id="schedule">
        <div className="schedule-container">
            <h2>Schedule</h2>
            <div className="schedule">
                <img src={iceblock2} className="iceblock2" alt="prop" />
                <div className="day1">
                    <h1>SATURDAY</h1>
                    <div className="timeline">
                        <p>Check-in</p> <p>9:30 AM</p>
                        <p>Opening Ceremony</p> <p>10:30 AM</p>
                        <p>Hackathon begins</p> <p>11:00 AM</p>
                        <p>Lunch</p> <p>1:30 PM</p>
                        <p>Workshop 1</p> <p>5:00 PM</p>
                        <p>Mini event</p> <p>7:00 PM</p>
                        <p>Dinner</p> <p>9:00 PM</p>
                        <p>Midnight Snacks <br />& Surprise</p> <p>12:00 AM</p>
                    </div>
                </div>
                <p className="emptyp"></p>
                <div className="day2">
                    {
                        /* <img src={frame8} className="frame9"/> */
                    }
                    <h1>SUNDAY</h1>
                    <div className="timeline">
                        <p>Breakfast</p> <p>8:00 AM</p>
                        <p>Workshop 2 Begins</p> <p>11:00 AM</p>
                        <p>Lunch</p> <p>1:30 PM</p>
                        <p>Mini event</p> <p>2:30 PM</p>
                        <p>Submissions Due</p> <p>5:30 PM</p>
                        <p>Hackathon ends</p> <p>6:00 PM</p>
                        <p>Mini event</p> <p>6:30 PM</p>
                        <p>Closing<br />Ceremony</p> <p>7:00 PM</p>
                    </div>
                </div>
                <img src={iceblock3} className="iceblock3" alt="prop" />

            </div>
        </div>
    </section>;
}
