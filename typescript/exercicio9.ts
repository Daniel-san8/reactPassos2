type venda = [string, number, string, { cor: string; marca: string }];

async function fetchApi() {
  const feti = await fetch("https://api.origamid.dev/json/vendas.json");
  const jsoon: venda[] = await feti.json();
  mostrarNaTela(jsoon);
}
fetchApi();

function mostrarNaTela(parameter: venda[]) {
  const valorTotal: number = parameter.reduce((acc, item) => {
    return item[1] + acc;
  }, 0);
  document.body.innerHTML += valorTotal;
}
