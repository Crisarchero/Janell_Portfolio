import React from 'react'

const Contact = () => {
  return (
    <div id = "contact" className = "w-50 mb-5">
        <h2>Reach Out</h2>

        <label for = "email">My Email: </label>
        <input className = "form-control" type = "email" name = "email" readOnly value = "jbrown282@collin.edu"/>
        <label for = "phone">My Phone Number:</label>
        <input className = "form-control" name = "phone" readOnly value = "xxx-xxx-xxxx"/>
    
    </div>
  )
}

export default Contact