interface IParams {
  params: {
    curso: string;
    aula: string;
  };
}

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};
// ultima rota
export default async function PageAula({ params }: IParams) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}/${params.aula}`
  );
  const aula = (await response.json()) as Aula;

  return (
    <div>
      <h1>Essa é a aula: {aula.nome}</h1>
      <ul>
        <li>Descrição: {aula.descricao}</li>
        <li>Tempo: {aula.tempo}</li>
        <li>Ordem: {aula.ordem}</li>
      </ul>
    </div>
  );
}
