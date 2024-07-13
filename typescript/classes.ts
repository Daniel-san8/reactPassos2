class Produtoo {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const livroo = new Produtoo("Fundamentos Apostólicos");

livroo.name;

console.log(livroo instanceof Produtoo);

class Livro extends Produtoo {
  autor: string;
  constructor(name: string, autor: string) {
    super(name);
    this.autor = autor;
  }
}

class Jogadores {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J. R. R Tolkien", "O Hobbit");
  }

  if (busca === "Dark Souls") {
    return new Jogadores(1);
  }

  return null;
}

const produtao = buscarProduto("O Hobbit");

if (produtao instanceof Jogadores) {
  produtao.jogadores;
}

if (produtao instanceof Produtoo) {
  console.log(produtao.name);
}

interface Carro {
  nome: string;
}

// NÃO FUNCIONA COM INSTANCEOF

const honda: Carro = {
  nome: "Honda",
};
