import { useContext } from 'react'
import styles from './CartItem.module.css';
import { CartContext } from '../../store/cart-context'
const CartItem = (props) => {
    const price = `$${+props.price.toFixed(2)}`;
    const ctx = useContext(CartContext);

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={() => ctx.removeId(props.id)}>−</button>
                <button >+</button>
            </div>
        </li>
    );
};

export default CartItem;
