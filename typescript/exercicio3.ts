async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos");
  const data = await response.json();

  mostrarCursos(data);
}

fetchCursos();

interface Lista {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: "iniciante" | "avançado";
}

function mostrarCursos(apiResponse: Array<Lista>) {
  apiResponse.forEach((curso) => {
    document.body.innerHTML += `
        <div>${curso.aulas}</div>
        <br>
        <div>${curso.nivel}</div>
        <div>${curso.tags}</div>
    `;
  });
}
