import React from "react";
import "./App.css";

function App() {
  const intervalo = React.useRef(retirada);

  function retirada() {
    clearInterval(intervalo.current);
    intervalo.current = setInterval(() => {
      setLoading(null);
    }, 2000);
  }

  const [loading, setLoading] = React.useState("");
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange({ target }) {
    setForm({ ...form, [target.id]: target.value });
  }

  async function handleClick(evento) {
    evento.preventDefault();
    try {
      const api = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (api.status === 403) {
        setLoading("Formulário deu erro");
      } else setLoading("Formulário Enviado");
    } catch (error) {
      console.log(error);
      setLoading("Formulário deu erro");
    } finally {
      retirada();
    }
  }

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={form.senha}
          onChange={handleChange}
        />
        <label htmlFor="cep">CEP:</label>
        <input id="cep" type="text" value={form.cep} onChange={handleChange} />
        <label htmlFor="rua">rua:</label>
        <input id="rua" type="text" value={form.rua} onChange={handleChange} />
        <label htmlFor="numero">numero:</label>
        <input
          id="numero"
          type="number"
          value={form.numero}
          onChange={handleChange}
        />
        <label htmlFor="bairro">bairro:</label>
        <input
          id="bairro"
          type="text"
          value={form.bairro}
          onChange={handleChange}
        />
        <label htmlFor="cidade">cidade:</label>
        <input
          id="cidade"
          type="text"
          value={form.cidade}
          onChange={handleChange}
        />
        <label htmlFor="estado">estado:</label>
        <input
          id="estado"
          type="text"
          value={form.estado}
          onChange={handleChange}
        />
        {loading && <p>{loading}</p>}
        <button onClick={handleClick} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
