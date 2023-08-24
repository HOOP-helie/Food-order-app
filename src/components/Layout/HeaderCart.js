import React from 'react'
import styles from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCart = (props) => {
    return (
        <button onClick={props.showModal} className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={styles.badge}>0</span>
        </button>
    )
}

export default HeaderCart