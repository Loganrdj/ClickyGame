import React from 'react';

function Nav(props){
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1"><h2>Clicky Game</h2></span>
            <span className="navbar-text">
                <h3>Current Score: {props.score}</h3>
            </span>
            <span className="navbar-text">
                <h3>High Score: {props.highScore}</h3>
            </span>
        </nav>
    )
}

export default Nav