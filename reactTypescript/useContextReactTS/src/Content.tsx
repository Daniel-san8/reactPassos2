import React from "react";
import { useUi } from "./Context";

const Content = () => {
  const { dark, dadosApi } = useUi();
  console.log(dadosApi);
  return <p>{dark ? "dark" : "light"}</p>;
};

export default Content;
