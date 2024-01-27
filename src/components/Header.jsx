import React from 'react'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className="header_name" to="/">
                    Urmil Rupareliya
                </h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className={ ({ isActive }) => `nav-NavLink ${ isActive ? "headerachor_active" : "headerachor" }` } to="/">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({ isActive }) => `nav-NavLink ${ isActive ? "headerachor_active" : "headerachor" }` } to="education">
                                Education
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({ isActive }) => `nav-NavLink ${ isActive ? "headerachor_active" : "headerachor" }` } to="skills">
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({ isActive }) => `nav-NavLink ${ isActive ? "headerachor_active" : "headerachor" }` } to="projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({ isActive }) => `nav-NavLink ${ isActive ? "headerachor_active" : "headerachor" }` } to="contact">
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
