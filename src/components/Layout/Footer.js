import React from 'react'
import { PaperClipOutlined, MailOutlined } from '@ant-design/icons'
import { Divider } from 'antd'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-div">
          <h4>Resume: </h4>
          <a
            className="footer-icon"
            href="https://docs.google.com/document/d/1VPwRBdIqeGzBuIFORXKY0RAySnfG7Q2f4gfhVMUQE2o/edit?usp=sharing"
            target="_blank"
          >
            <PaperClipOutlined />
          </a>
        </div>
        <Divider type="vertical" />
        <div className="footer-div">
          <MailOutlined className="footer-icon" />
          <h4>Jaclyndfoster89@gmail.com</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
