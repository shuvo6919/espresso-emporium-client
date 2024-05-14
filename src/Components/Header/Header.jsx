import "./header.css";

import logo from ".././../assets/images/more/logo1.png";
import defaultDP from "../../assets/images/more/default profile pic.jpg";
import headerBg from ".././../assets/images/more/header-bg.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../Providers/MainProvider/MainProvider";

const Header = () => {
  const { handleSound } = useContext(MainContext);
  return (
    <div className="header">
      <div className="header-container">
        <img className="header-bg" src={headerBg} alt="" />
        <img className="profile-pic" src={defaultDP} alt="" />
        <Link onClick={handleSound} to={"/"} className="logo-container">
          <img src={logo} alt="" />
          <h3>Espresso Emporium</h3>
        </Link>
        <div className="menu-container">
          <NavLink onClick={handleSound} to={"/login"}>
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
