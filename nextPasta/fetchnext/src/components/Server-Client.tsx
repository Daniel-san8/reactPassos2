"use client";

import React from "react";

type Produto = {
  id: number;
  nome: string;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function request() {
      const response = await fetch("https://api.origamid.online/produtos");
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    request();
  }, []);

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
