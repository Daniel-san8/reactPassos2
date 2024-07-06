import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

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
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <h2>Frutas:</h2>
      <Radio
        options={["Limão", "Goiaba", "Uva"]}
        value={frutas}
        setValue={setFrutas}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={["PHP", "JavaScript", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        setValue={setTermos}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
