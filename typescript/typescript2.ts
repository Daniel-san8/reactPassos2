const front: string = "Front end";

function ola(frase: string) {
  console.log(frase);
}

ola("oi");

const biblioteca = [
  {
    nome: "A guerra dos tronos",
    tipo: "livro",
  },
  {
    nome: "Dark souls",
    tipo: "jogo",
  },
];

function filtrarLivros(dados: string[]) {
  return biblioteca.filter((item) => {
    item.tipo = "livro";
  });
}
