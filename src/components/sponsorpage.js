import React from "react";
import {Link} from "react-router-dom";
import mlhlogo from '../assets/mlh-logo.png';
import advantagelogo from '../assets/Advantage.png';
import githublogo from '../assets/githublogo.png'
import logofh from '../assets/logo2 (1).png';
import snowlayer from '../assets/snow1.png';
import '../components/styles/sponsorpage.css';

function SponsorPage(){
    return(
        <section className="sponsorpage-section">
            <nav className="sponsor-nav">
                <Link to="/" ><img src={logofh} className="fhlogo" alt="frosthackslogo"/></Link>
                <h1>FROST<br/>HACKS</h1>
                <a className="mlh-trust-badge" href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank" rel="noreferrer"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{width:100}}/></a>

            </nav>
            <div className="sponsor-heading">
            <h1>SPONSORSHIP</h1>
            <img src={snowlayer} alt="snowlayer"/>

            <p className="sponsor-content"><span>Boost Your Brand's Reach!</span> <br/><br/>Support our first International Hackathon in Hyderabad for nationwide exposure. 
                <br/>Partner with us to engage a diverse audience and boost your brand's visibility.</p>
                </div>
            <div className="sponsor-logos-section">
                <h3>Join our Sponsors</h3>
                <div className="sponsors-div">

                    <img className="sponsor-logos" src={mlhlogo} alt="mlhlogo"/>
                    <div className="advantagelogo sponsor-logos"><img src={advantagelogo}  alt="advantagelogo"/>
                    <p>AdVantage<br/>Community</p></div>
                    <img className="sponsor-logos" src={githublogo} alt="github"/></div>
            </div>
            <br/>
            <br/>
            <button className="sponsor-button"><a href="https://forms.gle/L2ZzmneGXzGZSUbg8" target="_blank" rel="noreferrer">Become a Sponsor</a></button>
            <div className="benefits-section">
                <div className="packages">
                <h1>Sponsorship Benefits</h1>
                    <div className="package-details">
                        <h2>✨</h2>
                        <h3>Title Sponsor<br/>2 Lakhs</h3>
                        <h3>Gold Sponsor<br/> 1.5 Lakhs</h3>
                        <h3>Silver Sponsor<br/> 90K</h3>
                        <h3>Bronze Sponsor<br/>50K</h3>
                    </div>
                    <div className="package-details">
                        <h3>Brand Exposure on Website and Socials</h3>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p>✔️</p>
                        <h3>Stalls</h3>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p></p>
                        <p></p>
                        <h3>Marketing Opportunities</h3>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p></p>
                        <h3>Data Collection of attendees</h3>
                        <p>✔️</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <h3>Branding on merch and swag</h3>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p>✔️</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <h1 className="end-line">We'd Love to have you as our Sponsor for FROST HACKS!</h1>

        </section>
    )
}

export default SponsorPage;