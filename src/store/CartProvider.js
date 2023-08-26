import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
    items: [],
    totalPrice: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;

        // Check if item exists in cart and get its position
        const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[itemIndex];
        let updatedItems;
        if (existingItem) {
            // update amount of item
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            // Replace item in list of cart items
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalPrice: +updatedTotalPrice
        }
    }

    if (action.type === "REMOVE") {
        let updatedItems = [...state.items];

        const itemIndex = state.items.findIndex((item) => item.id === action.id);
        const updatedItem = state.items[itemIndex];

        updatedItem.amount = --updatedItem.amount;
        updatedItems[itemIndex] = updatedItem;

        const updatedTotalPrice = state.totalPrice - updatedItem.price;

        if (updatedItem.amount === 0) updatedItems.splice(itemIndex, 1)

        return {
            items: updatedItems,
            totalPrice: Math.abs(+updatedTotalPrice)
        }
    }

    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const contextValue = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: (item) => { addItemToCart(item) },
        removeId: (id) => { removeItemFromCart(id) }
    }

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider