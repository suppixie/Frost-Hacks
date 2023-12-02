import React from "react";
import './styles/sponsors.css'
import mlhlogo from '../assets/mlh-logo.png';
import stickers from '../assets/stickers.png'
import githublogo from '../assets/githublogo.png';
import advantagelogo from '../assets/Advantage.png';
import treasure from '../assets/treasure.png'

export default function Sponsors() {
    return <section className="sponsor-section">
        <div className="sponsors">

            <h1>Prizes</h1>
            <img style={{width:33+"vw", height:24+"vw"}} className="sponsor-logo" src={treasure} alt="treasure"/>


        


            <h1>Sponsors</h1>
            <div className="sponsor-list">
            <img  className="sponsor-logo" src={mlhlogo} alt="mlh logo"/>
            <div className="advantagelogo sponsor-logo"><img src={advantagelogo}  alt="advantagelogo"/>
                    <p>AdVantage<br/>Community</p></div>
                    <img className="sponsor-logo" src={githublogo} alt="github"/>
                    </div>
                    <br></br>
                   <h2>Swag Partner</h2>
                   <a href="https://www.standoutstickers.com/"> <img  className="sponsor-logo" src={stickers} alt="StandOut Stickers Logo"/></a>
        </div>
    </section>;
}
