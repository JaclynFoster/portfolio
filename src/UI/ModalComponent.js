import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import './ModalComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, modalOptions } from '../redux/slices/modalSlice'

const ModalComponent = props => {
const modal = useSelector(modalOptions)
const dispatch = useDispatch()
const closeButton = () => {
    dispatch(closeModal())
}
return (
    <Modal show={modal[props.modalName]}>
    <ModalHeader>
        <button className="close" onClick={closeButton}>
        X
        </button>
    </ModalHeader>
    <ModalBody>{props.children}</ModalBody>
    <ModalFooter>
        <button className="ok-btn" onClick={closeButton}>
        OK
        </button>
    </ModalFooter>
    </Modal>
)
}

export default ModalComponent

