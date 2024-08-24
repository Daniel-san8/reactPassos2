import React from "react";
import { useUi } from "./Context";

const Header = () => {
  const { dark, setDark } = useUi();
  return (
    <h1>
      <button onClick={() => setDark(!dark)}>Clique</button>
    </h1>
  );
};

export default Header;
