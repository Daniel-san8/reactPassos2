var _a;
function retorno(a) {
    return a;
}
console.log(retorno("oi"));
console.log(retorno(200));
console.log(retorno(true));
var numeross = [1, 2, 3, 4, 5, 6, 7];
var frutas = ["Banana", "Pera", "Uva", "Laranja", "Limão", "Maçã"];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeross));
console.log(firstFive(frutas));
function notNull(arg) {
    if (arg !== null) {
        return arg;
    }
    else {
        return null;
    }
}
console.log((_a = notNull("oi")) === null || _a === void 0 ? void 0 : _a.toLowerCase());
// console.log(notNull(22)?.toLowerCase());
function tipoDado(a) {
    var resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado("Teste");
tipoDado(true).dado;
console.log(tipoDado(true).dado);
