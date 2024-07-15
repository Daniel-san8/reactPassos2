function retorno<variavel>(a: variavel): variavel {
  return a;
}

console.log(retorno<string>("oi"));
console.log(retorno<number>(200));
console.log(retorno<boolean>(true));

const numeross = [1, 2, 3, 4, 5, 6, 7];
const frutas = ["Banana", "Pera", "Uva", "Laranja", "Limão", "Maçã"];

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
  return lista.slice(0, 5);
}

console.log(firstFive(numeross));
console.log(firstFive(frutas));

function notNull<T>(arg: T) {
  if (arg !== null) {
    return arg;
  } else {
    return null;
  }
}

console.log(notNull("oi")?.toLowerCase());
// console.log(notNull(22)?.toLowerCase());

function tipoDado<T>(a: T) {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado("Teste");
tipoDado(true).dado;
console.log(tipoDado(true).dado);
