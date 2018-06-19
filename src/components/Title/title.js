import React from "react";
import "./title.css"

const Title = props => (
    <div className="jumbotron">
        <h1>{props.name}'s Memory Game</h1>
        <h2>TOO MANY {props.name}!!!!!</h2>
    </div>
);

export default Title;
