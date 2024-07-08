import React from "react";

const types = {
  cep: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@a-zA-Z0-9?(?:\\.a-zA-Z0-9?)*$/,
    message: "CEP Inválido!!",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setErro("preencha um valor");
      return false;
    } else if (!types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    erro,
    onChange,
    onBlur: () => validate(value),
  };
};

export default useForm;
