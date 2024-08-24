import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface Data {
  id: string;
  nome: string;
  preco: number;
  quantidade?: number;
  descricao: string;
  internacional: boolean;
}

const useFetch = <T,>(url: string, options?: RequestInit) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const abortApi = new AbortController();
    const signal = abortApi.signal;

    async function chamadaApi() {
      try {
        setData(null);
        setLoading(true);

        const fetchApi = await fetch(url, {
          ...options,
          signal,
        });

        if (!fetchApi.ok) {
          throw new Error("Erro na aplicação");
        }

        const json = (await fetchApi.json()) as T;
        if (!signal.aborted) {
          setData(json);
          setLoading(true);
        }
      } catch (error) {
        if (
          !signal.aborted &&
          error instanceof Error &&
          error.name !== "AbortError"
        ) {
          setData(null);
          setLoading(false);
          setError(error);
        }
      }
    }

    chamadaApi();

    return () => {
      abortApi.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
