import React from "react";
import crystalonrock from '../assets/crystal-rock crystal.png';
import rockholder from '../assets/crystal-rock.png'

export default function About() {
  return <section className="about-section" id="about">
    <div className="about">
      {
        /* <img src={trees} className="trees"/> */
      }
      <div className="crystal-rock">
        <img src={crystalonrock} className="crystal-on-rock" alt="prop" />
        <img src={rockholder} className="rock-holder" alt="prop" />
      </div>
      <div className="info">
        <h1>About</h1>
        {
          /* <img src={snow3} className="snow3"/> */
        }
        <p>FROST HACK, a thrilling 30-hour hackathon held at the prestigious Institute of Aeronautical Engineering (IARE),
          extends a warm invitation to all students who share a burning passion for coding, regardless of your current skill level,
          there are no boundaries to your creativity. Our goal is to inspire participants to push their limits,
          unleash their boundless creativity, and take significant strides towards honing their coding prowess.
          Join us to push the limits of your coding abilities and embark on a journey of continuous improvement.
        </p>
      </div>
    </div>
  </section>;
}
