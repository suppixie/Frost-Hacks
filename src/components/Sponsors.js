import React from 'react';
import './styles/sponsors.css';
import mlhlogo from '../assets/mlh-logo.png';
import stickers from '../assets/stickers.png'
import catalog from '../assets/catalog.png';
import advantagelogo from '../assets/Advantage.png';
import treasure from '../assets/treasure.png';
import sorobann from '../assets/sorobann.png';
import hedera from '../assets/hedera.png';
import taipy from '../assets/taipy.png';
import cloudflare from '../assets/Cloudflare_Logo.svg.png';
import godaddy from '../assets/godaddy-registry.png';
import mongodb from '../assets/mongodb.png';
import streamlit from '../assets/streamlit.png';

export default function Sponsors() {
  return (
    <section className="sponsor-section">
      <div className="sponsors"  id="prizes">
        <h1 className="sponsor-heading">Prizes</h1>
        <div class="prizes">
          <div className="prize-bg">
            <div className="prize-pool">
              <h2>Prize Pool</h2>
              <h1>₹25,000</h1>
            </div>
            <img className="prize" src={treasure} alt="treasure" />
          </div>
        </div>
        <h1 className="sponsor-heading">Sponsors</h1>
        <div className="sponsor-list">
          <img className="sponsor-logo" src={mlhlogo} alt="mlh logo" />
          <div className="advantagelogo sponsor-logo">
            <img src={advantagelogo} alt="advantagelogo" />
            <p>AdVantage <br />Community </p>
          </div>
          <img className='sponsor-logo'  src={catalog} alt="catalog" />
        </div>
        <div className='swag-partner'>
          <br></br>
          <h2>Swag Partner</h2>
                    <a href="https://www.standoutstickers.com/"> <img  className="sponsor-logo" src={stickers} alt="StandOut Stickers Logo"/></a> 
        </div>
        <h2> Category Sponsors</h2>
        <div className='category-sponsors'>
          <img className="sponsor-logo" src={mongodb} alt="mongodb"/>
          <img className="sponsor-logo" src={godaddy} alt="godaddy"/>
          <img className="sponsor-logo" src={hedera} alt="Hedera"/>
          <img className="sponsor-logo" src={sorobann} alt="sorobann"/>
          <img className="sponsor-logo" src={taipy} alt="taipy"/>
          <img className="sponsor-logo" src={cloudflare} alt="cloudflare"/>
          <img className="sponsor-logo" src={streamlit} alt="streamlit"/>




        </div>
      </div>
    </section>
  );
}
