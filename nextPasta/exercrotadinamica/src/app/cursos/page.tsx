import Link from "next/link";

interface ICurso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  ["total_aulas"]: number;
  ["total_horas"]: number;
}

export default async function PageCursos() {
  const response = await fetch("https://api.origamid.online/cursos");
  const data = (await response.json()) as ICurso[];
  return (
    <h1>
      Cursos:{" "}
      {data.map((curso) => (
        <li key={curso.id}>
          <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          <p>Descrição: {curso.descricao}</p>
          <p>Total de aulas: {curso.total_aulas}</p>
          <p>Total de horas: {curso.total_horas}</p>
        </li>
      ))}
    </h1>
  );
}
