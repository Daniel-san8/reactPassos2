import React from "react";

function App() {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log("Executado");
  });
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>
        Clique aqui: {contar}
      </button>
    </div>
  );
}

export default App;
