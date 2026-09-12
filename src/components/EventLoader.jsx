import React from "react";
import "./EventLoader.css";

import logo from "../../public/images/icon.png";

const events = [
    { icon: "💍", name: "Engagement" },
    { icon: "🌿", name: "Mehendi" },
    { icon: "🌼", name: "Haldi" },
    { icon: "🎵", name: "Sangeet" },
    { icon: "🎪", name: "Carnival" },
    { icon: "💑", name: "Wedding" },
    { icon: "🎧", name: "DJ" },
];

const EventLoader = () => {
    return (
        <div className="event-loader">

            {/* Background particles */}
            <div className="particles"></div>

            {/* Top light */}
            <div className="spotlight spotlight-left"></div>
            <div className="spotlight spotlight-right"></div>

            <div className="loader-wrapper">

                {/* LOGO */}
                <div className="logo-loader">

                    {/* rotating light */}
                    <div className="rotating-light"></div>

                    {/* second glowing ring */}
                    <div className="logo-ring"></div>

                    <div className="logo-box">
                        <img src={logo} alt="7Story Events" />
                    </div>

                </div>

                {/* EVENTS */}
                <div className="events-list">

                    {events.map((event, index) => (
                        <div
                            className="loader-event"
                            key={event.name}
                            style={{ "--delay": `${index * 0.35}s` }}
                        >
                            <div className="event-circle">
                                <span>{event.icon}</span>
                            </div>

                            <p>{event.name}</p>
                        </div>
                    ))}

                </div>

                {/* Loading text */}
                <div className="creating-text">
                    <span>CREATING YOUR STORY</span>
                </div>

                {/* Progress */}
                <div className="progress-container">
                    <div className="progress-line"></div>
                    <div className="progress-light"></div>
                </div>

                <div className="loading-text">
                    LOADING
                    <span className="loading-dots">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default EventLoader;