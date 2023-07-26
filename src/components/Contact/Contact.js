import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import git from '../Contact/github.png'
import linkin from '../Contact/linkedin.png'
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
      <Card className="card" title="I'd love to hear from you!">
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
        <h4>Email me directly:</h4>
        <span>Jaclynfoster89@gmail.com</span>

        <Form
          className="form"
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: 'Please input your name!'
              }
            ]}
          >
            <Input
              value={inputName}
              onChange={e => setInputName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              }
            ]}
          >
            <Input
              value={inputEmail}
              onChange={e => setInputEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              rows={4}
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={e => sendMessage(e)}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default Contact



