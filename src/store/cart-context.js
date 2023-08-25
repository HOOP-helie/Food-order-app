import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    removeId: (id) => { }
})