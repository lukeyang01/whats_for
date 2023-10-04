import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../css/main.css'

// const [buttonText, setButtonText] = useState("Lunch?");
// const handleLoadItems = () => {
//     if (buttonText === "Lunch?") setButtonText("Dinner?");
//     else setButtonText("Lunch?");
// }

class Main extends Component {
    render() {
        return (
            <div className="index-container">
                <div className="center-items">
                    <div className="title-text-box">
                        <h1 className="title-text">Whats For...</h1>
                    </div>
                    <div className="ui-button-box">
                        <button className="ui-button">Lunch?
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('react-mountpoint')
);
