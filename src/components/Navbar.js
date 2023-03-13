import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky-top border-bottom shadow-sm nav navbar-light justify-content-between px-3 ">


            <a  className="w-25 navbar-brand text-primary" href="#hero">Janell B.</a>  
            <button class="navbar-toggler text-primary " type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">
                X
            </button>
            <div  className="collapse navbar-collapse" id="navbar-collapse">

                <ul className="nav justify-content-between align-items-center w-100">


                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#toolkit">Toolkit</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div> 
          

        </nav>
    )
}

export default Navbar