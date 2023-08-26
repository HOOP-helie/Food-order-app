import React, { useState, useContext } from 'react'
import styles from "./MealItemForm.module.css"
import { CartContext } from './../../../store/cart-context'

const MealItemForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState("0");
    const [amountIsValid, setAmountIsValid] = useState(true);
    const ctx = useContext(CartContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if (enteredAmount.trim().length === 0 || +enteredAmount < 1 || +enteredAmount > 5) {
            setAmountIsValid(false)
            return
        } else {
            setAmountIsValid(true)

            ctx.addItem({
                id: props.inputId,
                name: props.name,
                amount: +enteredAmount,
                price: props.price
            })
        }


    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.input}>
                <label htmlFor={props.inputId}>Amount</label>
                <input id={props.inputId} onChange={(e) => setEnteredAmount(e.target.value)} value={enteredAmount} type="number" />
            </div>
            <button> + Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm