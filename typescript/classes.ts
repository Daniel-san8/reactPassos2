class Produtoo {
  name: string;
  preco: number;
  constructor(name: string, preco: number) {
    this.name = name;
    this.preco = preco;
  }
  precoReal = () => {
    return `R$: ${this.preco}`;
  };
}

const livroo = new Produtoo("Fundamentos Apostólicos", 200);

livroo.name;
livroo.preco;
livroo.precoReal();
