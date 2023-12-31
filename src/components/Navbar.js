import React,{useState} from "react";
import logo from "../assets/logo2 (1).png";
import './styles/navbar.css'


export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleclick=()=>{
    setIsDropdownOpen(!isDropdownOpen);

  }
  return <div className="navbar">
                    <img src={logo} className="logo" alt="logo" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tracks">Tracks</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#prizes">Prizes</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a className="mlh-trust-badge" href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank" rel="noreferrer"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{width:100}}/></a>
                   <div className="hamburger-navbar">
                    <div onClick={handleclick} className="bars">
                    <p></p>
                    <p></p>
                    <p></p>
                    </div>
                    {isDropdownOpen && (
                        <div  className={`dropdown${isDropdownOpen ? ' open' : ''}`}>
                        <p><a href="/">Home</a></p>
                        <p><a href="#about">About</a></p>
                        <p><a href="#tracks">Tracks</a></p>
                        <p><a href="#schedule">Schedule</a></p>
                        <p><a href="#prizes">Prizes</a></p>
                        <p><a href="#faq">FAQ</a></p>
                        <p><a href="#contact">Contact</a></p>
                        </div>
                    )}
                    </div>
                </div>;
                
}
  