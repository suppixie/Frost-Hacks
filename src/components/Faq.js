import React, { useState } from 'react';
import tree from '../assets/trees1.png';
import './styles/faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="tree-img">
        <img src={tree} className="tree" alt="prop" />
      </div>
      <div className="question-container">
        <h1 id="faq">Faq</h1>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question1"
            className="question-checkbox"
          />
          <label
            htmlFor="question1"
            className="question-label"
            onClick={() => toggleAnswer(1)}
          >
            <h4>When and where will Frost Hacks 2023 take place?</h4>
            <span>{openIndex === 1 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 1 ? 'visible' : ''}`}>
            <p>
              Frost Hacks 2024 will be held on January 20th to 21st, 2024 at the
              Institute of Aeronautical Engineering(IARE).
            </p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question2"
            className="question-checkbox"
          />
          <label
            htmlFor="question2"
            className="question-label"
            onClick={() => toggleAnswer(2)}
          >
            <h4>
              How can I stay updated about Frost Hacks and receive event-related
              information?
            </h4>
            <span>{openIndex === 2 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 2 ? 'visible' : ''}`}>
            <p>
              Stay connected with us by following our Instagram @frosthacks.hyd We'll keep
              you informed about the latest news and announcements.
            </p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question3"
            className="question-checkbox"
          />
          <label
            htmlFor="question3"
            className="question-label"
            onClick={() => toggleAnswer(3)}
          >
            <h4>Will food & stay be provided?</h4>
            <span>{openIndex === 3 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 3 ? 'visible' : ''}`}>
            <p>
              We've got lots of food and snacks for everyone, stay hacky and
              hydrated. Stay will be arranged at the Campus.
            </p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question4"
            className="question-checkbox"
          />
          <label
            htmlFor="question4"
            className="question-label"
            onClick={() => toggleAnswer(4)}
          >
            <h4>Who can Participate?</h4>
            <span>{openIndex === 4 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 4 ? 'visible' : ''}`}>
            <p>
              We welcome undergraduates and graduate students of all majors,
              backgrounds, and skill levels to come create. <br/>Unfortunately, if
              you are under 18, you will not be able to attend.
            </p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question5"
            className="question-checkbox"
          />
          <label
            htmlFor="question5"
            className="question-label"
            onClick={() => toggleAnswer(5)}
          >
            <h4>Is there any Registration fee?</h4>
            <span>{openIndex === 5 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 5 ? 'visible' : ''}`}>
            <p>Frost Hacks is absolutely free for everyone to attend.</p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question6"
            className="question-checkbox"
          />
          <label
            htmlFor="question6"
            className="question-label"
            onClick={() => toggleAnswer(6)}
          >
            <h4>What are the team requirements?</h4>
            <span>{openIndex === 6 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 6 ? 'visible' : ''}`}>
            <p>
              Participate individually or in a team of up to 4 people. Your team
              members can be from other colleges too. If you are looking for a
              team, build one in the team-building channel on Discord which can be accessed once shortlisted.
            </p>
          </div>
        </div>

        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question7"
            className="question-checkbox"
          />
          <label
            htmlFor="question7"
            className="question-label"
            onClick={() => toggleAnswer(7)}
          >
            <h4>Will Travel expenses be covered by the Hackathon Organizers?</h4>
            <span>{openIndex === 7 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 7 ? 'visible' : ''}`}>
            <p>
              Unfortunately, Travel expenses will not be covered by the organizers.
              Kindly understand, as Frost Hacks is a free event, we have limited monetary resources.
            </p>
          </div>
        </div>
       
        <div className="questions">
          <input
            hidden
            type="checkbox"
            id="question8"
            className="question-checkbox"
          />
          <label
            htmlFor="question8"
            className="question-label"
            onClick={() => toggleAnswer(8)}
          >
            <h4>I have more questions</h4>
            <span>{openIndex === 8 ? '▲' : '▼'}</span>
          </label>
          <div className={`answer ${openIndex === 8 ? 'visible' : ''}`}>
            <p>
              You can email us at frosthackshyd@gmail.com or reach out on
              Instagram: @frosthacks.hyd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
