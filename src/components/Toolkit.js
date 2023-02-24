
import HTML5 from '../images/icons/icons8-html-5.svg'
import CSS3 from '../images/icons/icons8-css3.svg'
import JS from '../images/icons/icons8-javascript.svg'
import Mongodb from '../images/icons/icons8-mongodb.svg'
import React from '../images/icons/icons8-react.svg'
import MySQL from '../images/icons/icons8-mysql-logo.svg'
import Node from '../images/icons/icons8-node-js.svg'
import Php from '../images/icons/icons8-php-logo.svg'
import Bootstrap from '../images/icons/icons8-bootstrap.svg'
import Python from '../images/icons/icons8-python.svg'
import CSharp from '../images/icons/icons8-c-sharp-logo.svg'



const Toolkit = () => {
    return (
        <div id="toolkit">
            <h2>Toolkit</h2>
            <h3>Most Used</h3>
            <div id = "front-end">

                <img className src={HTML5} alt = "HTML"></img>
                <img src={CSS3} alt = "CSS"></img>
                <img src = {JS} alt = "JavaScript"></img>
                <img src = {React} alt = "React"></img> 
                <img src={Mongodb} alt = "MongoDB"></img>
                <img src={Node} alt = "NodeJS"></img>
                <img src={Bootstrap} alt = "Bootstrap"></img>


            </div>

            <h3>Other</h3>
            <div>
                <img src={MySQL} alt = "MySQL"></img>
                <img src={CSharp} alt = "C#"></img>
                <img src={Php} alt = "PHP"></img>
                <img src={Python} alt = "Python"></img> 
            </div>
        </div>

    )
}

export default Toolkit