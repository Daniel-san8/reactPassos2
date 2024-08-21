import React from "react";
import Input from "./Input";

function App() {
  return (
    <>
      <Input id="inputText" type="text" name="inputText">
        Teste
      </Input>
      <Input id="input2" type="checkbox" name="input2" className="input2Classe">
        Outro input
      </Input>
    </>
  );
}

export default App;
