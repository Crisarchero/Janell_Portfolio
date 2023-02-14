import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky-top">
            
            <ul className="nav navbar-light bg-light justify-content-between w-100">
                <a href="#hero" className="w-50 navbar-brand">Janell B.</a>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#toolkit">Toolkit</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar