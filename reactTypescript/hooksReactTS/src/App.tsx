import React from "react";
import Button from "./Button";

function user() {
  return {
    nome: "Daniel",
    profissao: "Dev",
  };
}

type User = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <>
      <Button incrementar={setTotal} />
      {data !== null && (
        <div>
          {data.nome} e {data.profissao}
        </div>
      )}
      {total}
    </>
  );
}

export default App;
