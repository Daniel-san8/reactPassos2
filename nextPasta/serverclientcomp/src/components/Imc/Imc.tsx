"use client";

import React from "react";

const Imc = () => {
  const altura = React.useRef<HTMLInputElement | null>(null);
  const peso = React.useRef<HTMLInputElement | null>(null);
  const [resultado, setResultado] = React.useState(0);

  function calculaImc() {
    if (altura.current && peso.current) {
      const calculoImc =
        +peso.current.value /
        (parseFloat(altura.current.value) * parseFloat(altura.current.value));
      setResultado(calculoImc);
    }
  }

  return (
    <div>
      <h1>Calculo de IMC:</h1>
      <label htmlFor="peso">Peso:</label>
      <input type="number" id="peso" ref={peso} />
      <div>
        <label htmlFor="altura">Altura:</label>
        <input type="text" id="altura" ref={altura} />
      </div>
      {resultado ? <p>Resultado: {resultado}</p> : null}

      <button onClick={calculaImc}>Calcular</button>
    </div>
  );
};

export default Imc;
