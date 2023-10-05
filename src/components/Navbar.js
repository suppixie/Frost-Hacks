import React from "react";
import logo from "../assets/logo2 (1).png";
import './styles/navbar.css'

export default function Navbar() {
  return <div className="navbar">
                    <img src={logo} className="logo" alt="logo" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tracks">Tracks</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="/">Prizes</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li></li>
                    </ul>
                </div>;
}
  