import React from 'react'
import styles from "./Cart.module.css"
import { createPortal } from 'react-dom'

const Cart = () => {
    return (
        <>
            {
                createPortal(
                    <div>
                        <div className={styles.total}>
                            <span>Total Amount</span>
                            <span>30</span>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles['button--alt']}>Close</button>
                            <button className={styles.button}>Order</button>
                        </div>
                    </div >
                    , document.getElementById('cartModal'))}</>
    )
}

export default Cart