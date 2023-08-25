import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
    items: [],
    totalPrice: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;
        console.log(state.totalPrice + action.item.price * action.item.amount)
        return {
            items: updatedItems,
            totalprice: updatedTotalPrice
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
        console.log(item)
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const contextValue = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: (item) => { addItemToCart(item) },
        removeId: (id) => { }
    }

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider