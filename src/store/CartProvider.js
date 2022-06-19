
import CartContext from "./cart-context";
import { useReducer } from "react";

const initCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const exitsCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const exitsCartItem = state.items[exitsCartItemIndex];

        let updatedItems;

        if (exitsCartItem) {
            const updatedItem = {
                ...exitsCartItem,
                amount: exitsCartItem.amount + action.item.amount,
            }

            updatedItems = [...state.items];
            updatedItems[exitsCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if (action.type === 'REMOVE') {
        const exitsCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const exitsItem = state.items[exitsCartItemIndex];
        const updatedTotalAmount = state.totalAmount -exitsItem.price;

        let updatedItems;

        if(exitsItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = {...exitsItem, amount: exitsItem.amount -1}
            updatedItems = [...state.items];
            updatedItems[exitsCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    return initCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatch] = useReducer(cartReducer, initCartState)

    const addItemToCartHandler = (item) => {
        dispatch({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatch({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;