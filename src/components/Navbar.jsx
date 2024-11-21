import { NavLink } from "react-router-dom";

export default function Navbar() {
    return ( 
    <div className="navbar">
    <span className="name"> 
    <NavLink
          className={({ isActive }) =>
            `link name ${isActive ? "active" : ""}`
          }
          to="/home"
        >
          {({ isActive }) => (isActive ? "🌸 Sophie Sokol" : "Sophie Sokol")}
        </NavLink>
        </span>
    <div className="pageLinks">
        <NavLink
          className={({ isActive }) =>
            `link pageLinkItem ${isActive ? "active" : ""}`
          }
          to="/work"
        >
          {({ isActive }) => (isActive ? "🌸 Work" : "❀ Work")}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `link pageLinkItem ${isActive ? "active" : ""}`
          }
          to="/about"
        >
          {({ isActive }) => (isActive ? "🌸 About" : "❀ About")}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `link pageLinkItem ${isActive ? "active" : ""}`
          }
          to="/projects"
        >
          {({ isActive }) => (isActive ? "🌸 Projects" : "❀ Projects")}
        </NavLink>
    </div>
    </div> )
}