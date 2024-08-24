import React from "react";
import { UIContextProvider } from "./Context";
import Header from "./Header";

function App() {
  return (
    <UIContextProvider>
      <Header />
    </UIContextProvider>
  );
}

export default App;
