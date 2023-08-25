import React from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    return (
        <li className={styles.meal}>
            <div>
                <p>{props.name}</p>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>${props.price.toFixed(2)}</p>
            </div>
            <MealItemForm {...props} inputId={"amount" + props.id} />
        </li>
    )
}

export default MealItem