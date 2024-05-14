import { Link } from "react-router-dom";
import loginPagePic from "../../assets/images/more/login page.png";
import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const Login = () => {
  const { handleSound, googleLogin } = useContext(MainContext);
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
        <form>
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
