import React from "react";
import './Nav.css';

export const Nav = props => (

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">HeyArnold MemoryGame</h1>
        </div>
        <nav>
            <ul>
                <li id="rw">{props.rightWrong}</li>

                <li id="cur-sco">Current Score: {props.score}</li>

                <li id="top-sco">Top Score: {props.topScore}</li>
            </ul>
        </nav>
    </div>
);
