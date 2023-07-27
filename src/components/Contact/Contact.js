import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import git from '../Contact/github.png'
import linkin from '../Contact/linkedin.png'
import { MailOutlined, PaperClipOutlined } from '@ant-design/icons'
import { Button, Form, Input, Card, Divider } from 'antd'
import '../Layout/Layout.css'
import '../Contact/Contact.css'
import axios from 'axios'

const { TextArea } = Input

const Contact = () => {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const [sendStatus, setSendStatus] = useState(true)
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const sendMessage = e => {
    e.preventDefault()
    axios
      .post(`/api/sendEmail`, {
        name: inputName,
        email: inputEmail,
        message: inputMessage
      })
      .then(response => {
        console.log(response.data)
      })
    console.log('sent')
    setSendStatus(true)
    setInputName('')
    setInputEmail('')
    setInputMessage('')
  }

  return (
    <Layout>
      <div className="contact-container">
        <Card
          className="card"
          title="I'd love to hear from you!"
          headStyle={{ color: 'whitesmoke' }}
        >
          <p>My contact info is below:</p>
          <a href="https://github.com/JaclynFoster" target="_blank">
            <img className="contacts" src={git} />
          </a>
          <label>Github</label>
          <a href="https://www.linkedin.com/in/jaclynfoster89" target="_blank">
            <img className="contacts" src={linkin} />
          </a>
          <label className="linked">LinkedIn</label>
          <Divider />
          <div className="resume-container">
            <h4>Email Me:</h4>
            <MailOutlined style={{ color: 'blue' }} />
            <span> Jaclynfoster89@gmail.com</span>
            <a
              href="https://docs.google.com/document/d/1VPwRBdIqeGzBuIFORXKY0RAySnfG7Q2f4gfhVMUQE2o/edit?usp=sharing"
              target="_blank"
            >
              <PaperClipOutlined style={{ color: 'blue' }} />
            </a>
            <span>View Resume</span>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Contact





