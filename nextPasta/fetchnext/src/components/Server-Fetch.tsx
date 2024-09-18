type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos");
  const data = (await response.json()) as Produto[];
  return (
    <ul>
      {data.map((dado) => {
        return (
          <li key={dado.id}>
            <p>{dado.nome}</p>
          </li>
        );
      })}
    </ul>
  );
}
