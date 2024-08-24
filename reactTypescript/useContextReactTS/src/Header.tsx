import React from "react";
import { useUi } from "./Context";
import Content from "./Content";

const Header = () => {
  const { dark, setDark } = useUi();
  return (
    <h1>
      <Content />
      <button onClick={() => setDark(!dark)}>Clique</button>
    </h1>
  );
};

export default Header;
