import React from 'react'
import Layout from '../Layout/Layout'
import git from '../Contact/github.png'
import linkin from '../Contact/linkedin.png'
import {Card} from 'antd'
import '../Layout/Layout.css'
import '../Contact/Contact.css'
import ContactForm from './ContactForm'

const Contact = ({ mail, setMail }) => {
  return (
    <Layout>
      <div className="contact-container">
        <Card
          className="card"
          title="I'd love to hear from you!"
          headStyle={{ color: 'whitesmoke' }}
        >
          <h3>My contact info is below:</h3>
          <div className="contact-icon-flex">
            <a href="https://github.com/JaclynFoster" target="_blank">
              <img className="contacts" src={git} />
            </a>
            <label>Github</label>

            <a
              href="https://www.linkedin.com/in/jaclynfoster89"
              target="_blank"
            >
              <img className="contacts" src={linkin} />
            </a>
            <label>LinkedIn</label>
          </div>
          <h4>Send me an E-Mail:</h4>
          <ContactForm mail={mail} setMail={setMail} />
        </Card>
      </div>
    </Layout>
  )
}

export default Contact






