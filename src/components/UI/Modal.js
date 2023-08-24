import React from 'react'
import styles from "./Modal.module.css"
import { createPortal } from 'react-dom'

const Backdrop = (props) => {
    return (
        <div onClick={props.hideModal} className={styles.backdrop}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>{props.children}</div>
    )
}
const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop hideModal={props.hideModal} />, document.getElementById('cartModal'))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('cartModal'))}

        </>
    )
}




export default Modal