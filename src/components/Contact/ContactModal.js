import React from 'react'
import { FcOk } from 'react-icons/fc'

const ContactModal = () => {
return (
    <div className="contact-modal">
    <FcOk className="success-icon"/>
    <h2>
        Your email was successfully sent.
    </h2>
    <h4>
        I look forward to speaking with you soon.
    </h4>
    </div>
)
}

export default ContactModal
