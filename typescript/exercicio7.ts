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
    json.map(({ nome, horas, tags }: Api) => {
      if (nome && horas && tags) {
        document.body.innerHTML += `
            <p>${nome}</p>
            <p>${horas}</p>
            <p>${tags.map((item) => item).join(", ")}</p>
        `;
      }
    });
}
consumirApi();
