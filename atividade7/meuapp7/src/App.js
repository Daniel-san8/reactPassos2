import React from "react";

function App() {
  const [comentarios, setComentarios] = React.useState([]);
  const inputElement = React.useRef();
  const [input, setInput] = React.useState("");

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => {
          return <li key={comentario}>{comentario}</li>;
        })}
      </ul>

      <input
        ref={inputElement}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
