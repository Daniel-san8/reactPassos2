import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Input value={nome} label="Nome" id="Nome" setValue={setNome} required />
      <Input
        value={email}
        label="Email"
        id="Email"
        setValue={setEmail}
        required
      />
      <Select
        options={["Smartphone", "Tablet Verde"]}
        value={produto}
        setValue={setProduto}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
