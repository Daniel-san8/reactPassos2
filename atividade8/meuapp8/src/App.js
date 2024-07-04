import React from "react";

const App = () => {
  function useNumeroAleatorio() {
    React.useEffect(() => {
      document.title = Math.random();
    }, []);
  }
  useNumeroAleatorio();
  return <div></div>;
};

export default App;
