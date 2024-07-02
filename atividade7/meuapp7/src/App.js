import React from "react";

function App() {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localItem = localStorage.getItem("Produto");
    console.log("aconteceu");
    return localItem;
  }, []);

  console.log(valor);
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Total {contar}</button>
    </div>
  );
}

export default App;
