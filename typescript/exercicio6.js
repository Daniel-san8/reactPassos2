function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.round(valor);
    }
    else {
        var valorNumber = +valor;
        return String(Math.round(valorNumber));
    }
}
console.log(arredondar(22.69));
console.log(arredondar("22.69"));
