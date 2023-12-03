import React from 'react';
import './styles/sponsors.css';
import mlhlogo from '../assets/mlh-logo.png';
// import stickers from '../assets/stickers.png'
import githublogo from '../assets/githublogo.png';
import advantagelogo from '../assets/Advantage.png';
import treasure from '../assets/treasure.png';

export default function Sponsors() {
  return (
    <section className="sponsor-section">
      <div className="sponsors">
        <h1 className="sponsor-heading">Prizes</h1>
        <div class="prizes">
          <div className="prize-bg">
            <div className="prize-pool">
              <h2>Prize Pool</h2>
              <h1>₹2,00,000</h1>
            </div>
            <img className="prize" src={treasure} alt="treasure" />
          </div>
        </div>
        <h1 className="sponsor-heading">Sponsors</h1>
        <div className="sponsor-list">
          <img className="sponsor-logo" src={mlhlogo} alt="mlh logo" />
          <div className="advantagelogo sponsor-logo">
            <img src={advantagelogo} alt="advantagelogo" />
            <p>
              AdVantage
              <br />
              Community
            </p>
          </div>
          <img className="sponsor-logo" src={githublogo} alt="github" />
        </div>
        <br></br>
        {/* <h2>Swag Partner</h2>
                   <a href="https://www.standoutstickers.com/"> <img  className="sponsor-logo" src={stickers} alt="StandOut Stickers Logo"/></a> */}
      </div>
    </section>
  );
}
