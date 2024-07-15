function abortar(mensagem) {
    throw new Error(mensagem);
}
// abortar("Um erro ocorreu");
console.log("tente novamente");
function calcular(forma) {
    forma.perimetro(3);
}
console.log(function calcular(forma) {
    forma.perimetro(3);
});
