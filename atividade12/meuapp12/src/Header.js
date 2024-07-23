import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <h1>Esse é o header</h1>
      <NavLink to="/" end>
        {" "}
        Home
      </NavLink>
      ///<NavLink to="sobre"> Sobre</NavLink>
    </>
  );
};

export default Header;
