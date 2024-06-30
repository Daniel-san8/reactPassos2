import React from "react";
import ButtonNotebook from "./ButtonNotebook";
import ButtonTablet from "./ButtonTablet";
import ButtonSmartPhone from "./ButtonSmartPhone";

function App() {
  return (
    <div>
      <ButtonNotebook nomeNotebook="Notebook" />
      <ButtonTablet nomeTablet="Tablet" />
      <ButtonSmartPhone nomeSmartPhone="SmartPhone" />
    </div>
  );
}

export default App;
