import { Link } from "react-router-dom";
import loginPagePic from "../../assets/images/more/login page.png";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const Login = () => {
  const {
    handleSound,
    googleLogin,
    signInWithEmailPass,
    successAlert,
    errorAlert,
    user,
  } = useContext(MainContext);
  const handleGoogleLogin = () => {
    handleSound();
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  const handleSignIn = (e) => {
    handleSound();
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailPass(email, password)
      .then((result) => {
        console.log(result.user);
        successAlert("Successfully Logged in!");
      })
      .catch((err) => {
        console.log(err.code);
        errorAlert(err.code);
      });
  };
  console.log(user);
  return (
    <div className="login-container">
      <div>
        <img src={loginPagePic} alt="" />
      </div>
      <div className="login">
        <h1>
          Sign in to <span>Espresso Emporium</span>
        </h1>
        <p>
          Do not have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
        <form onSubmit={handleSignIn}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Login" className="button" />
        </form>
        <button onClick={handleGoogleLogin} className="button">
          <FaGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
