import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"


// React 18 render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App(props) {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <div >
            <img className="avatar" src="lion-3576045_1280.jpg" alt="Avatar Image"/>
        </div>
    );
}

function Intro(props) {
    return (
        <div>
            <h1>Steps to Starting a Business While Working Full Time</h1>
            <p>Building a startup company can be an exciting and rewarding experience, but it also requires a lot of hard work and dedication.</p>
            <p>Did you know 3.2 million people in the United Kingdom have aspirations to establish their own small business?</p>
            <p>That's 10% of the country's working population and a significant portion of the current job market. The difficulty is that most people are unable to leave their full-time jobs to start a business. According to BalanceSMB, a company's first profit can take anywhere from six months to several years. With that concept weighing heavily on many people's minds, you may be hesitant to start your own firm.</p>
            <p>It is possible to establish a business while juggling the responsibilities of full-time employment. This is something that many businesses are successful at. You can start developing a company idea wIt is possible to establish a business while juggling the responsibilities of full-time employment. This is something that many businesses are successful at. You can start developing a company idea while still working your full-time job and preserving that all-important financial safety net with a side business, which is sometimes referred to as a side hustle.hile still working your full-time job and preserving that all-important financial safety net with a side business, which is sometimes referred to as a side hustle.</p>
        </div>
    );
}

function SkillList(props) {
    return (
        <div className="skill-list">
            <Skill skill="Time Management" emoji="💪" color="cyan" />
            <Skill skill="Team work" emoji="💪" color="orangered" />
            <Skill skill="Vision" emoji="💪" color="yellow" />
            <Skill skill="Consistency" emoji="💪" color="green" />
            <Skill skill="Money Making" emoji="💪" color="blue" />
        </div>
    );

}

function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

