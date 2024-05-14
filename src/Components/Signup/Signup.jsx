import { Link } from "react-router-dom";
import signupPagePic from "../../assets/images/more/login page.png";
import "./signup.css";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const Signup = () => {
  const {
    handleSound,
    googleLogin,
    signupWithEmailPass,
    successAlert,
    errorAlert,
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

  const handleSignUp = (e) => {
    handleSound();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      errorAlert("Password should have at least 6 characters");
      return;
    }
    signupWithEmailPass(email, password)
      .then((result) => {
        console.log(result.user);
        successAlert("Successfully created account!");
      })
      .catch((err) => {
        console.log(err.code);
        errorAlert(err.code);
      });
  };
  return (
    <div className="signup-container">
      <div>
        <img src={signupPagePic} alt="" />
      </div>
      <div className="signup">
        <h1>
          Sign up to <span>Espresso Emporium</span>
        </h1>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
        <form onSubmit={handleSignUp}>
          <input required type="text" name="name" placeholder="Name" />
          <input required type="email" name="email" placeholder="Email" />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" value="Signup" className="button" />
        </form>
        <button onClick={handleGoogleLogin} className="button">
          <FaGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
