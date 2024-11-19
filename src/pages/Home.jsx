import Divider from "../components/Divider"

// Technology Images
import Nodejs from "../img/nodejs.png"
import Expressjs from "../img/expressjs.png"

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
            <h2>Technologies</h2>
            <img className="technologyItem" src={Nodejs} alt="" />
            <img className="technologyItem" src={Expressjs} alt="" />
        </div>
    </div>
    </main>
}