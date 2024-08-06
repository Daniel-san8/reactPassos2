interface UserData {
  name?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  userData: UserData;
}

window.userData = {};

const formulario = document.querySelector(".formulario") as HTMLFormElement;

function handleUp({ target }: KeyboardEvent) {
  const input = target as HTMLInputElement;
  if (input.id === "name") {
    window.userData.name = input.value;
    localStorage.setItem("name", input.value);
  } else if (input.id === "email") {
    window.userData.email = input.value;
    localStorage.setItem("email", input.value);
  } else if (input.id === "cpf") {
    window.userData.cpf = input.value;
    localStorage.setItem("cpf", input.value);
  }
}

function carregaDados() {
  let inputsCampos = document.querySelectorAll("input");
  inputsCampos.forEach((input) => {
    let valor = localStorage.getItem(input.id);

    if (input && valor) {
      input.value = valor;
    }
  });
}
carregaDados();

formulario?.addEventListener("keyup", handleUp);
