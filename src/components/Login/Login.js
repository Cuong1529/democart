import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const loginHandler = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/meals");
  };
  return (
    <form className={classes.login} onSubmit={loginHandler}>
      <h1>Login</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Login</button>
    </form>
  );
}

export default Login;
