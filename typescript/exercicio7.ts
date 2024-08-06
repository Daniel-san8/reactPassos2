interface Api {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: string;
  nome: string;
  tags: string[];
}

async function consumirApi() {
  const chama = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await chama.json();
  if (json)
    json.map((item: Api) => {
      if (item.nome && item.horas && item.tags) {
        document.body.innerHTML += `
            <p>${item.nome}</p>
            <p>${item.horas}</p>
            <p>${item.tags.map((item) => item)}</p>
        `;
      }
    });
}
consumirApi();
