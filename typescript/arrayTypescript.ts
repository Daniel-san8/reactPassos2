const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 20, 30, 40, 50, 3, "produto", "taxas"];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "string");
}

maiorQue10(numeros);
console.log(filtrarValores(valores));

const dados = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 80],
];
