import "./header.css";

import logo from ".././../assets/images/more/logo1.png";
import defaultDP from "../../assets/images/more/default profile pic.jpg";
import headerBg from ".././../assets/images/more/header-bg.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const Header = () => {
  const { handleSound, user, successAlert, logOut, errorAlert } =
    useContext(MainContext);
  const handleLogout = () => {
    handleSound();
    logOut()
      .then((result) => {
        console.log(result.user);
        successAlert("Logged Out!");
      })
      .catch((err) => {
        successAlert("Logged Out!");
        console.log("running", err.code);
      });
  };

  return (
    <div className="header">
      <div className="header-container">
        <img className="header-bg" src={headerBg} alt="" />
        <div>
          {user && (
            <>
              {user.photoURL ? (
                <img className="profile-pic" src={user.photoURL} alt="" />
              ) : (
                <img className="profile-pic" src={defaultDP} alt="" />
              )}
            </>
          )}
        </div>

        <Link onClick={handleSound} to={"/"} className="logo-container">
          <img src={logo} alt="" />
          <h3>Espresso Emporium</h3>
        </Link>
        <div className="menu-container">
          {user ? (
            <Link onClick={handleLogout} to={"/login"}>
              Logout
            </Link>
          ) : (
            <NavLink onClick={handleSound} to={"/login"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
