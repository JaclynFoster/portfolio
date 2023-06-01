import React from 'react'
import Layout from '../Layout/Layout'
import git from '../Contact/github.png'
import linkin from '../Contact/linkedin.png'
import { Button, Form, Input, Card, Divider } from 'antd'
import '../Layout/Layout.css'
import '../Contact/Contact.css'
const { TextArea } = Input

const Contact = () => {
  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Layout>
      <Card className="card" title="I'd love to hear from you!">
        <p>My contact info is below:</p>
        <img className="contacts" src={git} />
        <label>Github</label>
        <img className="contacts" src={linkin} />
        <label className="linked">Linked In</label>
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
            <Input />
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
            <Input />
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default Contact