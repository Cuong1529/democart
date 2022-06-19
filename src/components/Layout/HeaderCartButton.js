import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import ButtonWrapper from "./ButtonWrapper";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0)
  return (
    <ButtonWrapper>
      <button className='button' onClick={props.onClick}>
        <span className='icon'>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
      </button>
    </ButtonWrapper>
  );
}

export default HeaderCartButton;
