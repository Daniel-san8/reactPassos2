async function consumirApi() {
  const chama = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await chama.json();
  console.log(json);
}
consumirApi();

interface api {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: string;
  nome: string;
  tags: string[];
}
