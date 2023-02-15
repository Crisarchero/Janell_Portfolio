import React from 'react'

const Buttons = (props) => {
    return (
        <div className = "d-flex flex-column">
            <a className = "btn btn-secondary mb-2" href = {props.code}>View Code</a>
            <a className = "btn btn-secondary mb-2" href = {props.url}>View Live</a>
        </div>
    )
}

export default Buttons