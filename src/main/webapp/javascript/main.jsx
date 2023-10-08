import React, {useEffect, useState} from "react";
import Suggestions from "./suggestions";
import '../css/main.css';


export default function Main() {
    const [buttonText, setButtonText] = useState('Lunch?');
    const [currTime, setCurrTime] = useState((new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(new Date())).toLowerCase());

    const handleButtonText = () => {
        if (buttonText === "Lunch?") setButtonText("Dinner?");
        else if (buttonText === "Dinner?") setButtonText("Breakfast?");
        else setButtonText("Lunch?");
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime((new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format(new Date())).toLowerCase());
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="main" className="main-container">
            <header className="index-header flex-container">
                <a className="login-button" href="/accounts/login/">Login</a>
            </header>
            <div className="center-items-container flex-container centered">
                <div className="time-text">
                    {currTime}
                </div>
                <div className="hungry-text">
                    Hungry?
                </div>
                <div className="center-items flex-container centered">
                    <div className="title-text-box flex-container">
                        <h1 className="whats-for-text">Whats For...</h1>
                    </div>
                    <div className="main-button-box">
                        <button className="main-button" onClick={handleButtonText}>
                            <span className="main-button-text">{buttonText}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


