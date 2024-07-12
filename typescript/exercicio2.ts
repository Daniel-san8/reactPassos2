async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook");
  const data = await response.json();

  showProduct(data);
}

fetchProduto();

interface DataApi {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: {
    nome: string;
    fundacao: number;
    pais: string;
  };
  empresaMontadora: {
    nome: string;
    fundacao: number;
    pais: string;
  };
}

function showProduct(data: DataApi) {
  document.body.innerHTML = `
        <div>
            <h2>${data.empresaFabricante.pais}</h2>
        </div>
    `;
}
