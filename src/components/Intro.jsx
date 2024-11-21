import Prettyflowers from "../components/Prettyflowers";

export default function Intro() {
    return (
        <div className="topContainer generalContainer">
            <div className="intro">
        <h2 className="homeTitle">Hi, I'm Sophie Sokol<br /> A<span className="pinkGradientText"> full-stack developer</span></h2>
        <Prettyflowers />
        <p className="introParagraph">I'm a full-stack developer focused on building scalable, user-focused applications. I'm dedicated to improving people's lives with my apps, whilst providing beautiful, clean interfaces.</p>
        </div>
        <img src="https://64.media.tumblr.com/1a99e1436877c4c0565a8caf404b1893/b34a1d7332107ad3-08/s540x810/0188512676109a2bf754db581a5b4dc3a5371c9d.jpg" alt="" className="profileImg" />
        </div>
    )
}