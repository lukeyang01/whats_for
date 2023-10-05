import React, {Component, useState} from "react";
import ReactDOM from 'react-dom/client';
import Main from './main.jsx'
import '../css/styles.css'
import Suggestions from "./suggestions";

const root = ReactDOM.createRoot(document.getElementById('react-mountpoint'));
root.render(
    <React.StrictMode>
        <div className="index-container flex-container">
            <Main/>
            <Suggestions/>
        </div>
    </React.StrictMode>
);

