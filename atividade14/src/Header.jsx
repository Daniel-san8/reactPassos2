import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("mudou a rota");
  }, [location]);
  return (
    <div>
      {/* <Link to="/">Home</Link>☺<Link to="sobre">Sobre</Link> */}
      <NavLink to="/" end>
        Home
      </NavLink>
      ☺<NavLink to="sobre">Sobre</NavLink>☺ ☺<NavLink to="login">Login</NavLink>
    </div>
  );
};

export default Header;
