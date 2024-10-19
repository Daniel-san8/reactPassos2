import React from "react";
// import Contato from "./Contato";

const Contato = React.lazy(() => import("./Contato"));

function App() {
  const [ativo, setAtivo] = React.useState(false);
  // olhar depois
  return (
    <>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}

      <button onClick={() => setAtivo(!ativo)}>Clique</button>
    </>
  );
}

export default App;
