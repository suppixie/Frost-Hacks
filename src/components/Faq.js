import React from "react";
import tree from '../assets/trees1.png';


export default function Faq() {
    return <section className="faq-section">
        <div className="tree-img">
            <img src={tree} className="tree" alt="prop" />
        </div>
        <div className="question-container">
            <h1 id="faq">Faq</h1>
            <div className="questions">
                <input hidden type="checkbox" id="question1" class="question-checkbox" />
                <label for="question1" className="question-label">
                    <h4>What is Frost Hacks?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>FROST HACKS is a thrilling 24-hour hackathon hosted at the prestigious Institute of Aeronautical Engineering (IARE) that invites students with a passion for coding, regardless of their skill level, to unleash their creativity and enhance their coding abilities.</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question2" class="question-checkbox" />
                <label for="question2" className="question-label">
                    <h4>When and where will FROST HACKS 2023 take place?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>FROST HACKS 2023 will be held on December 2nd to 3rd 2023 at the Institute of Aeronautical Engineering (IARE)</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question3" class="question-checkbox" />
                <label for="question3" className="question-label">
                    <h4>How can I stay updated about FROST HACKS and receive event-related information?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>Stay connected with us by joining our discord server. We'll keep you informed about the latest news and exciting developments.</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Will food be provided?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>We've got lots of food and snacks for everyone, stay hacky and hydrated</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question5" class="question-checkbox" />
                <label for="question5" className="question-label">
                    <h4>Who can Participate?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>We welcome undergraduates and graduate students of all majors, backgrounds, and skill level to come create.
                        Unfortunately, if you are under 18, you will not be able to attend.</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question6" class="question-checkbox" />
                <label for="question6" className="question-label">
                    <h4>Is there any Registration fee?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>FROST HACKS is absolutely free for everyone to attend.</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question7" class="question-checkbox" />
                <label for="question7" className="question-label">
                    <h4>I have more questions</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>You can mail us at info@frosthacks.org or reach out on instagram @frosthacks.iare</p>

                </div></div>
        </div>
    </section>;
}
