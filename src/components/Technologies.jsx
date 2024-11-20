// Technology Images
import postgresql from "../img/postgresql.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import ts from "../img/ts.svg";
import node from "../img/node.svg";
import express from "../img/express.svg";

export default function Technologies() {
    return (
        <div className="technologies">
            <h2 className="homeTitle technologyTitle">🌸 Technologies</h2>
            <div className="iconContainer">
                <img src={html} alt="html" className="technologyIcon" />
                <img src={css} alt="css" className="technologyIcon" />
                <img src={react} alt="react" className="technologyIcon" />
                <img src={ts} alt="ts" className="technologyIcon" /> 
            </div>
            <div className="iconContainer">
                <img src={node} alt="node" className="technologyIcon" />
                <img src={express} alt="express" className="technologyIcon" />
                <img src={js} alt="js" className="technologyIcon" />
            </div>
            <div className="iconContainer">
                <img src={postgresql} alt="postgresql" className="technologyIcon" />
            </div>
        </div>
    )
}