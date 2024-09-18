import Link from "next/link";

interface IParams {
  params: {
    curso: string[];
  };
}

type Aula = Pick<ICurso, "id" | "slug" | "nome" | "descricao"> & {
  ["curso_id"]: number;
  tempo: number;
  ordem: number;
};

interface ICurso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  ["total_aulas"]: number;
  ["total_horas"]: number;
  aulas: Aula[];
}

export default async function PageCurso({ params }: IParams) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}`
  );
  const data = (await response.json()) as ICurso;
  const { aulas } = data;
  if (!aulas) return null;
  return (
    <div>
      <h1>Curso: {params.curso}</h1>
      <ul>
        {aulas.map((aula) => (
          <li key={aula["curso_id"]}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              Aula: {aula.nome}
            </Link>
            <p>Descrição: {aula.descricao}</p>
            <p>Tempo: {aula.tempo}</p>
            <p>Ordem: {aula.ordem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
