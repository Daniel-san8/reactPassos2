interface Produtooa {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "Azul",
};

const produto2 = {
  nome: "Geladeira",
  quantidade: 30,
  freezer: true,
};

const servico1 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Produtooa) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);
