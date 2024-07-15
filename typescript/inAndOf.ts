const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("Existe");
}

async function fetchProdutoooa() {
  const response = await fetch("https://api.origamid.dev/json/notebook");
  const json = await response.json();

  handleProdutoooa(json);
}

interface Produtooo {
  nome: string;
  preco: number;
}

function handleProdutoooa(dado: Produtooo) {
  console.log(dado);
  if ("preco" in dado && "nome" in dado)
    document.body.innerHTML += `
    <p>${dado.nome}</p>
    <p>${dado.preco}</p>
  `;
}

fetchProdutoooa();
