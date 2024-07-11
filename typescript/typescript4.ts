function typescript4() {
  let preco = 200;

  const barato = preco > 400 ? true : "Caro";

  function somar(a: number, b: number) {
    return `${a + b}`;
  }

  const nintendo = {
    nome: "Nintendo",
    preco: "2000",
  };

  function transformarPreco(produto: { nome: string; preco: string }) {
    produto.preco = "R$" + produto.preco;
    return produto;
  }

  const produtoNovo = transformarPreco(nintendo);
}
export { typescript4 };
