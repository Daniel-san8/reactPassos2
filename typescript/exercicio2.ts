async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook");
  const data = await response.json();

  showProduct(data);
}

fetchProduto();

interface DataApi {
  nome: "Notebook";
  preco: 2000;
  descricao: "Novo notebook com 128gb de memória ram.";
  garantia: "3";
  seguroAcidentes: true;
  empresaFabricante: {
    nome: "Ranek";
    fundacao: 1850;
    pais: "Dinamarca";
  };
  empresaMontadora: {
    nome: "Handel";
    fundacao: 2000;
    pais: "Polônia";
  };
}

function showProduct(data: DataApi) {
  document.body.innerHTML = `
        <div>
            <h2>${data.empresaFabricante.pais}</h2>
        </div>
    `;
}
