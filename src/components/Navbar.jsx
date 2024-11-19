import { Link } from "react-router-dom";

export default function Navbar() {
    return ( 
    <div className="navbar">
    <span className="name"> <Link className="link" to="/">🌸 Sophie Sokol</Link> </span>
    <div className="pageLinks">
    <Link className="link pageLinkItem" to="/about">About</Link>
    <Link className="link pageLinkItem" to="/work">Work</Link>
    <Link className="link pageLinkItem" to="/projects">Projects</Link>
    </div>
    </div> )
}