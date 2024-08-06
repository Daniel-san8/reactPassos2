type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({ rodas: 20, portas: 25, preco: 20 });

type CarroComPortas = Carro & {
  portas: number;
};

export {};
