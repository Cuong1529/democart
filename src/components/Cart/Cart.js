import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

function Cart(props) {
    const cartContext = useContext(CartContext);

    const cartItemAddHandler = (item) => {
        cartContext.addItem({
            ...item,
            amount: 1,
        })
    }

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
            <CartItem item
                key={item.id}
                price={item.price}
                name={item.name}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
        )
        )}
    </ul>
    return (
        <Modal hideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{cartContext.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;