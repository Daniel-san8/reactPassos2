interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: "ragnarok",
};

const livro: Product = {};

jogo.nome?.toLocaleLowerCase();

livro.nome;
