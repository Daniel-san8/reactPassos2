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
  const [vali, setVali] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function handleBlur({ target }) {
    const regexCEP = /^\d{5}-?\d{3}$/;
    const validation = regexCEP.test(target.value);
    console.log(validation);
  }

  function validateCep(value) {
    if (value.length === 0) {
      setErro("preencha um valor");
      return false;
    } else if (/^\d{5}-?\d{3}$/.test(value)) {
      setErro("Preencha um CEP válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

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

      <h2>Validação</h2>

      <Input
        label="Validation"
        id="vali"
        name="vali"
        value={vali}
        setValue={setVali}
        placeholder="00000-000"
        onBlur={handleBlur}
      />
    </form>
  );
};

export default App;
