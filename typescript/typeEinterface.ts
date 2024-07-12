type NumberOrString = string | number;

let total: NumberOrString = "20";

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
  document.body.innerHTML = `
        <div>${dados.nome}</div>
        <h2>${dados.preco}</h2>
        <p>${dados.teclado}</h2>
    `;
}

const computador: Produto = {
  nome: "oi",
  preco: 23,
  teclado: false,
};

preencherDados({
  nome: "Computador",
  preco: 259,
  teclado: true,
});

preencherDados({
  nome: "Notebook",
  preco: 2599,
  teclado: true,
});

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
  console.log(categoria);
}

pintarCategoria("descod");
