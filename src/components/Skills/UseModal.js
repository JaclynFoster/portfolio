import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalFooter } from 'react-bootstrap'
import './UseModal.css'

const UseModal = ({ setUseModal }) => {
  const closeModal = () => {
    setUseModal(false)
  }

  return (
    <Modal show={true}>
      <ModalHeader>
        <h3>Bonus Knowledge & Programs</h3>
      </ModalHeader>
      <ModalBody>
        {' '}
        <div className="bonus-container">
          <div>
            <h4>Knowledge:</h4>
            <ul>
              <li>10+ years experience in the medical field</li>
              <li>7+ years experience in management</li>
              <li>Licensed Texas Workers Compensation Adjuster</li>
              <li>Certified Professional Medical Biller</li>
            </ul>
          </div>
          <div>
            <h4>Programs:</h4>
            <ul>
              <li>Athena</li>
              <li>Centricity</li>
              <li>WebPT</li>
              <li>Availity</li>
              <li>ADP</li>
              <li>Microsoft Office</li>
              <li>Adobe</li>
            </ul>
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <button className="ok-btn" onClick={closeModal}>
          OK
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default UseModal
