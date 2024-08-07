type venda = [string, number, { cor: string; marca: string }];

async function fetchApi() {
  const feti = await fetch("https://api.origamid.dev/json/vendas.json");
  const jsoon = await feti.json();
  mostrarNaTela(jsoon);
}
fetchApi();

function mostrarNaTela(parameter: any) {
  const valorTotal: number = parameter.reduce((acc: number, item: venda) => {
    return item[1] + acc;
  }, 0);
  document.body.innerHTML += valorTotal;
}
