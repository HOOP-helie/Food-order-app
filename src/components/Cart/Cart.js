import React, { useContext } from 'react'
import styles from "./Cart.module.css"
import Modal from '../UI/Modal'
import { CartContext } from '../../store/cart-context'

const Cart = (props) => {

    const ctx = useContext(CartContext);

    return (
        <Modal hideModal={props.hideModal}>
            <div>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>${ctx.totalPrice}</span>
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