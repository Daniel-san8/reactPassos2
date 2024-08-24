import React from "react";
import { useUi } from "./Context";

const Content = () => {
  const { dark } = useUi();
  return <p>{dark ? "dark" : "light"}</p>;
};

export default Content;
