import React from "react";
import { UIContextProvider } from "./Context";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <UIContextProvider>
      <Header />
      <Content />
    </UIContextProvider>
  );
}

export default App;
