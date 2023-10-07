import React, {useEffect, useState} from "react";
import Map from "./map"
import '../css/suggestions.css'


export default function Suggestions() {
    const listItems = [
        {name: "McDonald's", location: "401 Nob Hill Ct.", rating: 5, distance: "15 miles"},
        {name: "Subway", location: "401 Nob Hill Ct.", rating: 4, distance: "100 feet"},
        {name: "McDonald's", location: "401 Nob Hill Ct.", rating: 5, distance: "15 miles"},
        {name: "Subway", location: "401 Nob Hill Ct.", rating: 4, distance: "100 feet"},
        {name: "McDonald's", location: "401 Nob Hill Ct.", rating: 5, distance: "15 miles"},
        {name: "Subway", location: "401 Nob Hill Ct.", rating: 4, distance: "100 feet"}
    ]
    const renderedListItems = listItems.map((item) => {
        return (<div className="suggestion-card flex-container" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.distance}</p>
            <p>{item.rating}</p>
            <p>{item.location}</p>
        </div>)
    })


    return (
        <div id="suggestions" className="suggestions-container flex-container">
            <div className="suggestion-cards-container flex-container">
                {renderedListItems}
            </div>
            <div className="map-container flex-container">
                <div className="flex-container">
                    <button>Refresh</button>
                    <button onClick={() =>
                        document.getElementById('main').scrollIntoView()
                    }>Back To Top
                    </button>
                </div>
                <Map/>
            </div>
        </div>
    );
}



