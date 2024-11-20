// Components
import Divider from "../components/Divider";
import ContactForm from "../components/ContactForm";

// Technology Images
import postgresql from "../img/postgresql.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import ts from "../img/ts.svg";
import node from "../img/node.svg";
import express from "../img/express.svg";

export default function Home() {
    return <main>
    <div className="container">
        <div className="topContainer">
            <div className="intro">
        <h2 className="homeTitle">Hi, I'm Sophie <br /> A<span className="pinkGradientText"> full-stack developer</span></h2>
        <p className="introParagraph">I'm a full-stack developer focused on building scalable, user-focused applications. I'm dedicated to improving people's lives with my apps, whilst providing beautiful, clean interfaces.</p>
        </div>
        <img src="https://64.media.tumblr.com/1a99e1436877c4c0565a8caf404b1893/b34a1d7332107ad3-08/s540x810/0188512676109a2bf754db581a5b4dc3a5371c9d.jpg" alt="" className="profileImg" />
        </div>
        <Divider />
        <div className="technologies">
            <h2 className="homeTitle technologyTitle">Technologies</h2>
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
        <Divider />
        <div className="contactContainer">
        <h2 className="homeTitle">Contact me</h2>
            <ContactForm />
        </div>
    </div>
    </main>
}