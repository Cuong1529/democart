import React, { Component , useContext} from "react";
import MealItemWrapper from "./MealItemWrapper";
import MealItemForm from "./MealItemForm";
import { Link } from "react-router-dom";
import classes from './MealItem.module.css';
import CartContext from "../../store/cart-context";

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li>
      <div className={classes.meal}>
        <Link to={`/meals/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>

  );
}

// class MealItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: props.id,
//       name: props.name,
//       description: props.description,
//       price: props.price,
//     }
//     this.onChageDescription = this.onChageDescription.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     if(prevProps.isResetMeal === false && this.props.isResetMeal === true) {
//       const { id, name, description, price } = this.props;
//       this.setState({
//         id,
//         name,
//         description,
//         price,
//       })
//       this.props.handleResetMeals();
//     }
//   }

//   onChageDescription(event) {
//     const { value } = event.target;
//     this.setState({
//       description: value,
//     })
//   }

//   render() {
//     const {id, name, description, price } = this.state;
//     return (
//       <MealItemWrapper>
//        <li>
//            <div className="meal">
//              <Link to={`/meals/${id}`}>
//                <h3>{name}</h3>
//              </Link>
//              <input className="description" value={description} onChange={this.onChageDescription} />
//              <div className="price">{price}</div>
//            </div>
//            <div></div>
//        </li>
//      </MealItemWrapper>
//     );
//   }
// }

export default MealItem;
