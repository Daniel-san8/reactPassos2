import React from "react";

function App() {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  return (
    <div>
      <form>
        {coresArray.map((cor) => (
          <label key={cor}>
            {cor}
            <input
              type="checkbox"
              value={cor}
              onChange={({ target }) => console.log(target)}
            />
          </label>
        ))}
      </form>
    </div>
  );
}

export default App;
