
import HTML5 from '../images/icons/icons8-html-5.svg'
import CSS3 from '../images/icons/icons8-css3.svg'
import JS from '../images/icons/icons8-javascript.svg'
import Mongodb from '../images/icons/icons8-mongodb.svg'
import React from '../images/icons/icons8-react.svg'
import MySQL from '../images/icons/icons8-mysql-logo.svg'
import Node from '../images/icons/icons8-node-js.svg'

const Toolkit = () => {
    return (
        <div id="toolkit">
            <h2>Toolkit</h2>
            <h3>Front End</h3>
            <div id = "front-end">

                <img className src={HTML5} alt = "HTML"></img>
                <img src={CSS3} alt = "CSS"></img>
                <img src = {JS} alt = "JavaScript"></img>
                <img src = {React} alt = "React"></img>

            </div>

            <h3>Backend</h3>
            <div>

                <img src={Mongodb} alt = "MongoDB"></img>
                <img src={MySQL} alt = "MySQL"></img>
                <img src={Node} alt = "NodeJS"></img>

            </div>
        </div>

    )
}

export default Toolkit