import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from "react-router-dom";

import App from "../../App";
import Login from "./Login";
import MealDetail from "../Meals/MealDetail";
import NotFound from "../NotFound/NotFound";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route
          path="/meals"
          render={() => {
            return localStorage.getItem("accessToken") ? (
              <App />
            ) : (
              <Redirect to="/" exact />
            );
          }}
        ></Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
