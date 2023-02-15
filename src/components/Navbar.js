import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky-top border-bottom shadow-sm">
            
            <ul className="nav navbar-light justify-content-between align-items-center w-100">
                <a href="#hero" className="w-25 navbar-brand ms-1">Janell B.</a>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#toolkit">Toolkit</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar