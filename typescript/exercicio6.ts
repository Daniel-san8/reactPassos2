function arredondar(valor: number): number;
function arredondar(valor: string): string;
function arredondar(valor: number | string) {
  if (typeof valor === "number") {
    return Math.round(valor);
  } else {
    const valorNumber = +valor;
    return String(Math.round(valorNumber));
  }
}

console.log(arredondar(22.69));
console.log(arredondar("22.69"));
