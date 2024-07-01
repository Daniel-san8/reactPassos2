import React from "react";
import Button from "./Button";

function App() {
  async function functionButtonOk({ target }) {
    const request = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const requestResponse = await request.json();
    console.log(requestResponse);
  }
  return (
    <div>
      <Button functionButtonOk={functionButtonOk} texto="Smartphone" />
      <Button functionButtonOk={functionButtonOk} texto="Notebook" />
    </div>
  );
}

export default App;
