import React, { Component } from "react";
import mealImage from "../../assets/meals.jpg";
import HeaderWrapper from "./HeaderWrapper";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <HeaderWrapper>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src={mealImage} alt='Math Problems'/>
      </div>
    </HeaderWrapper>
  );
}

// class Header extends Component {
//   constructor() {
//     super();
//     this.state = { cartNumber: 0 };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextState);
//     if (nextState.cartNumber % 2 === 0) {
//       return true;
//     }
//     return false;
//   }

//   render() {
//     return (
//       <HeaderWrapper>
//         <header className="header">
//           <h1>Meals</h1>
//           <button
//             className="cart"
//             type="button"
//             onClick={() =>
//               this.setState({ cartNumber: this.state.cartNumber + 1 })
//             }
//           >
//             Cart Number: {this.state.cartNumber}
//           </button>
//         </header>
//         <div className="main-image">
//           <img src={mealImage} alt="Math Problems" />
//         </div>
//       </HeaderWrapper>
//     );
//   }
// }

export default Header;
