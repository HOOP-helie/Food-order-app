import React from 'react'
import styles from "./Cart.module.css"
import Modal from '../UI/Modal'

const Cart = (props) => {
    return (
        <Modal hideModal={props.hideModal}>
            <div>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>30</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.hideModal} className={styles['button--alt']}>Close</button>
                    <button className={styles.button}>Order</button>
                </div>
            </div >
        </Modal>
    )
}

export default Cart