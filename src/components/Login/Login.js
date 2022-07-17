import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const loginHandler = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/meals");
  };
  const registerHandler = () => {
    history.push("/register");
  };
  return (
    <div className={classes.login}>
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <input placeholder="Username" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </form>
      <button onClick={registerHandler}>Register</button>
    </div>
  );
}

export default Login;
