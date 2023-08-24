import React from 'react'
import styles from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    return (
        <form className={styles.form} action="">
            <div className={styles.input}>
                <label htmlFor={props.inputId}>Amount</label>
                <input id={props.inputId} type="number" />
            </div>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm