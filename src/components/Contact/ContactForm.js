import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'
import { Card, Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import ContactModal from './ContactModal'
import ModalComponent from '../../UI/ModalComponent'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'

const ContactForm = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [mail, setMail] = useState([])
const dispatch = useDispatch()
const modal = useSelector(modalOptions)
const sendMail = () => {
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/mail/sendMail`, {
        name,
        email,
        message
    })
    .then(res => {
        console.log('Portfolio Email Sent:', ...res.data)
        setMail(...res.data)
        dispatch(showModal('contact'))
        setName('')
        setEmail('')
        setMessage('')
    })
    .catch(err => {
        console.log('Send Email Error:', err)
    })
}
return (
    <Card>
    <Form onFinish={sendMail}>
        <Form.Item label="Name:">
        <Input value={name} onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email:">
        <Input value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Message:">
        <TextArea
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        {modal.contact ? (
    <ModalComponent modalName={'contact'}>
        <ContactModal />
    </ModalComponent>
        ): null}
        </Form.Item>
        <Button type="primary" htmlType="submit">
        Submit
        </Button>
    </Form>
    </Card>
)
}

export default ContactForm
