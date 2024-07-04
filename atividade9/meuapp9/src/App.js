import React from "react";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <form>
        <label
          style={{
            fontSize: "2rem",
          }}
          htmlFor="nome"
        >
          Nome
        </label>
        <br />
        <input
          name="nome"
          type="text"
          id="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <label htmlFor="email"></label>
        <input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
