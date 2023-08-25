import React, { useContext } from 'react'
import styles from "./Cart.module.css"
import Modal from '../UI/Modal'
import { CartContext } from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {

    const ctx = useContext(CartContext);
    const hasItems = ctx.items.length > 0

    return (
        <Modal hideModal={props.hideModal}>
            {hasItems && <div>
                <ul className={styles['cart-items']}>
                    {ctx.items.map((item) => {

                        const randomId = item.id + Math.random()
                        return <CartItem key={randomId} {...item} />
                    })}
                </ul>
            </div>}
            <div>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>${ctx.totalPrice.toFixed(2)}</span>
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