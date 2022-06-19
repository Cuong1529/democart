import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import MealDetail from "./components/Meals/MealDetail.js";
import { useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [isShowCart, setShowCart] = useState(false);


  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {isShowCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/meals" />
          </Route>
          <Route path="/meals" exact>
            <Meals />
          </Route>
          <Route path="/meals/:mealId">
            <MealDetail />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
