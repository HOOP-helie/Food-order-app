import React, { useContext } from 'react'
import styles from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon'
import { CartContext } from '../../store/cart-context'

const HeaderCart = (props) => {
    const ctx = useContext(CartContext);
    const numberOFCartItems = ctx.items.reduce((curNumber, item) => { return curNumber + item.amount; }, 0)
    return (
        <button onClick={props.showModal} className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={styles.badge}>{numberOFCartItems}</span>
        </button>
    )
}

export default HeaderCart