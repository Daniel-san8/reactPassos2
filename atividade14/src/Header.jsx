import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>☺<Link to="sobre">Sobre</Link> */}
      <NavLink to="/" end>
        Home
      </NavLink>
      ☺<NavLink to="sobre">Sobre</NavLink>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
