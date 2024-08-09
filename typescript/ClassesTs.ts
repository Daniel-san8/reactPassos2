class Produto {
  readonly tipo = "produto";
  nome: string;
  private preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  getPreco() {
    return Produto.transformarPreco(this.preco);
  }
  static transformarPreco(preco: number) {
    return `R$: ${preco}`;
  }
}

const livro = new Produto("O senhor dos Anéis", 2);
console.log(livro);
console.log(livro.getPreco());
// console.log(livro.preco) usando o private
// console.log(livro.tipo = 'opa') somente leitura usando readonly

export {};
