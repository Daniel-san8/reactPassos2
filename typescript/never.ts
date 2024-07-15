function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

// abortar("Um erro ocorreu");

console.log("tente novamente");

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}
function calcular(forma: Quadrado) {
  forma.perimetro(3);
}
function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar("Produto  ").toUpperCase());
console.log(normalizar(["Banaaa    ", "UvaaaAAaa    "]).filter);
