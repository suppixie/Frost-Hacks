import React,{useEffect} from "react";
import tree from '../assets/trees1.png';
import './styles/faq.css'
import $ from 'jquery';


export default function Faq() {
    useEffect(() => {
        $('.question-label').on('click', function() {
            var answer = $(this).next('.answer');
            var checkbox = $(this).prev('input[type="checkbox"]');
            
            if (answer.is(':visible')) {
                answer.slideUp(300, function() {
                    checkbox.prop('checked', false);
                });
            } else {
                $('.answer:visible').slideUp(300);
                $('.question-checkbox:checked').prop('checked', false);
                answer.slideDown(300, function() {
                    checkbox.prop('checked', true);
                });
            }
        });
    }, []);

    return <section className="faq-section">
        <div className="tree-img">
            <img src={tree} className="tree" alt="prop" />
        </div>
        <div className="question-container">
            <h1 id="faq">Faq</h1>

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
                    <p>Stay connected with us by joining our discord server. We'll keep you informed about the latest news and announcements.</p>
                </div>
            </div>

            <div className="questions">
                <input hidden type="checkbox" id="question4" class="question-checkbox" />
                <label for="question4" className="question-label">
                    <h4>Will food & stay be provided?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>We've got lots of food and snacks for everyone, stay hacky and hydrated in our cozy & free stay. </p>
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
                    <h4>what are the team requirements?</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>Participate Individually or in a team of upto 4 people. Your team members can be from other colleges too. 
                        <br/>If you are Looking for a team, build one in the team-building channel on discord.</p>
                </div></div>

                <div className="questions">
                <input hidden type="checkbox" id="question8" class="question-checkbox" />
                <label for="question8" className="question-label">
                    <h4>I have more questions</h4>
                    <span>&#9660;</span>
                </label>
                <div className="answer">
                    <p>You can mail us at frosthackshyd@gmail.com or reach out on instagram @frosthacks.iare</p>
                </div></div>
        </div>
    </section>;
}
