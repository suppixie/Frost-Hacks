import React from "react";
export default function Countdown({}) {
  return <section className="countdown-section">
                <div className="countdown">
                    <h1>Hackathon<br />begins in</h1>
                    <iframe title="countdown" className="countdown-date" src="https://www.tickcounter.com/widget/countdown/4490171"></iframe>
                </div>
            </section>;
}
  