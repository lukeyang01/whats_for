import React, {useEffect, useState} from "react";
import Suggestions from "./suggestions";
import '../css/main.css'


export default function Main() {
    const [buttonText, setButtonText] = useState('Lunch?');
    const [time, setTime] = useState(0);

    const handleButtonText = () => {
        if (buttonText === "Lunch?") setButtonText("Dinner?");
        else if (buttonText === "Dinner?") setButtonText("Breakfast?");
        else setButtonText("Lunch?");
    }

    useEffect(() => {
    }, []);

    return (
        <div className="main-container">
            <header className="index-header flex-container">
                <button className="login-button">Login</button>
            </header>
            <div className="center-items-container flex-container centered">
                <div className="center-items flex-container centered">
                    <div className="title-text-box">
                        <h1 className="title-text">Whats For...</h1>
                    </div>
                    <div className="ui-button-box">
                        <button className="ui-button" onClick={handleButtonText}>
                            <span>{buttonText}</span>
                        </button>
                    </div>
                </div>
                <div className="center-items flex-container centered">
                    <button className="scroll-button" onClick={() =>
                        document.getElementById('suggestions').scrollIntoView()
                    }></button>
                </div>
            </div>
        </div>
    );
}


