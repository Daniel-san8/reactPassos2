import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";
import useForm from "./Hooks/useForm";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  const [vali, setVali] = React.useState("");
  const [erro, setErro] = React.useState(null);

  const cep = useForm("cep");
  console.log(cep);

  function handleSubmit(evento) {
    evento.preventDefault();
    console.log("Enviou");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={nome} label="Nome" id="Nome" onChange={setNome} required />
      <Input value={email} label="Email" id="Email" onChange={setEmail} />
      <Select
        options={["Smartphone", "Tablet Verde"]}
        value={produto}
        onChange={setProduto}
      />
      <Radio options={["Azul", "Vermelho"]} value={cor} onChange={setCor} />
      <h2>Frutas:</h2>
      <Radio
        options={["Limão", "Goiaba", "Uva"]}
        value={frutas}
        onChange={setFrutas}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={["PHP", "JavaScript", "Ruby"]}
        value={linguagens}
        onChange={setLinguagens}
      />
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        onChange={setTermos}
      />

      <h2>Validação</h2>

      <Input
        label="Validation"
        id="vali"
        name="vali"
        placeholder="00000-000"
        {...cep}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
