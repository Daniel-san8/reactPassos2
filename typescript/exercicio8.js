window.userData = {};
var formulario = document.querySelector(".formulario");
function handleUp(_a) {
    var target = _a.target;
    var input = target;
    if (input.id === "name") {
        window.userData.name = input.value;
        localStorage.setItem("name", input.value);
    }
    else if (input.id === "email") {
        window.userData.email = input.value;
        localStorage.setItem("email", input.value);
    }
    else if (input.id === "cpf") {
        window.userData.cpf = input.value;
        localStorage.setItem("cpf", input.value);
    }
}
function carregaDados() {
    var inputsCampos = document.querySelectorAll("input");
    inputsCampos.forEach(function (input) {
        var valor = localStorage.getItem(input.id);
        if (input && valor) {
            input.value = valor;
        }
    });
}
carregaDados();
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener("keyup", handleUp);
