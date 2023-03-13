import React from 'react'

const Contact = () => {
  return (
    <div id = "contact" className = "w-50 mb-5">
        <h2>Reach Out</h2>

        <label for = "email">My Email: </label>
        <input className = "form-control text-center" type = "email" name = "email" readOnly value = "jbrown282@collin.edu"/>
        <label for = "phone">My Phone Number:</label>
        <input className = "form-control text-center" name = "phone" readOnly value = "682-999-9313"/>
    
    </div>
  )
}

export default Contact