import React from "react";
import Input from "./Input";
import { ApiData } from "./Input";

function App() {
  const [data, setData] = React.useState<ApiData[] | null>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const inicioRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const api = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`;

  React.useEffect(() => {
    if (inicio && final) {
      async function fetchApi(api: string): Promise<ApiData[]> {
        const apiResponse = await fetch(api);
        const json = await apiResponse.json();
        setData(json);
        return json;
      }
      fetchApi(api);
    }
  }, [inicio, final]);

  function handleChange(
    referencia: React.MutableRefObject<HTMLInputElement | null>,
    partida: "inicio" | "final"
  ) {
    if (referencia.current && partida === "inicio") {
      setInicio(referencia.current.value);
    }
    if (referencia.current && partida === "final") {
      setFinal(referencia.current.value);
    }
  }

  return (
    <>
      <Input
        label="Data inicio"
        id="inicio"
        type="date"
        inicio={inicio}
        data={data}
        ref={inicioRef}
        value={inicio}
        onChange={() => handleChange(inicioRef, "inicio")}
      />
      <Input
        label="Data final"
        id="final"
        type="date"
        final={final}
        data={data}
        ref={finalRef}
        value={final}
        onChange={() => handleChange(finalRef, "final")}
      />

      {data &&
        data.map((dados) => {
          return (
            <ul key={dados.id}>
              <li>
                {dados.nome}: {dados.status}
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default App;
