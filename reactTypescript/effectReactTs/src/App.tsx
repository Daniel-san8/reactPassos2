import React from "react";

function App() {
  React.useEffect(
    //async não é aceito dessa forma com TypeScript porque não retorna outra function
    () => {
      console.log("montou");
      //return true não pode também, apenas function

      return () => {
        console.log("desmontou");
      };
    },
    []
  );
  return <></>;
}

export default App;
