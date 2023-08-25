import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <h2>Send me an Email at Jaclynfoster89@gmail.com</h2>
            <label>Name:</label>
            <input type="text"/>
            <label>Email:</label>
            <input type="text"/>
            <label>Message:</label>
            <textarea></textarea>
            <button type="submit">Submit</button>
        </div>
    )
}

export default ContactForm