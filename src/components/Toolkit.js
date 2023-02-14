import React from 'react'
import HTML5 from '../icons8-html-5.svg'
import CSS3 from '../icons8-css3.svg'
import Mongodb from '../icons8-mongodb.svg'
const Toolkit = () => {
    return (
        <div id="toolkit">
            <h2>Toolkit</h2>
            <h3>Front End</h3>
            <div>

                <img src={HTML5}></img>
                <img src={CSS3}></img>

            </div>

            <h3>Backend</h3>
            <div>

                <img src={Mongodb}></img>
            </div>
        </div>

    )
}

export default Toolkit