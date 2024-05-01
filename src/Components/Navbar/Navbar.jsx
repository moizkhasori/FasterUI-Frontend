import React from "react";
import "./navbar.scss";
import Button from "../General/Button/Button";
import CenterNav from "./CenterNav/CenterNav";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        
        <div className="left-logo">
        <img src="logo.png" alt="" />
          <h3>FasterUI</h3>
        </div>

        <CenterNav />

        <div className="right-buttons">
          <Button text={"Sign In"} type={"secondry"} />
          <Button text={"Sign Up"} type={"primary"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
