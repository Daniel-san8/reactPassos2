import React from "react";
import Input from "./Input";
import { ApiData } from "./Input";

function App() {
  const [data, setData] = React.useState(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const inicioRef = React.useRef(null);
  const finalRef = React.useRef(null);

  React.useEffect(() => {
    const api = `https://data.origamid.dev/vendas/?inicio=${inicio}&${final}=${final}`;

    async function fetchApi(api: string): Promise<ApiData[]> {
      const apiResponse = await fetch(api);
      const json = await apiResponse.json();
      setData(json);
      console.log(data);
      return json;
    }
    if (inicio && final) {
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
    </>
  );
}

export default App;
