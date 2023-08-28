import React, { useContext, useEffect, useState } from 'react'
import styles from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon'
import { CartContext } from '../../store/cart-context'

const HeaderCart = (props) => {
    const [animateBtn, setAnimateBtn] = useState(false);

    const ctx = useContext(CartContext);

    const numberOFCartItems = ctx.items.reduce((curNumber, item) => { return curNumber + item.amount; }, 0)
    const { items } = ctx;

    const btnClasses = `${styles.button} ${animateBtn ? styles.bump : ''}`;

    useEffect(() => {
        setAnimateBtn(true);

        const timer = setTimeout(() => {
            setAnimateBtn(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button onClick={props.showModal} className={btnClasses}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={styles.badge}>{numberOFCartItems}</span>
        </button>
    )
}

export default HeaderCart