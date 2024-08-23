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
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

const useFetch = (url: string, options?: RequestInit): FetchState<Data> => {
  const [state, setState] = React.useState<FetchState<Data>>({
    data: null,
    loading: false,
    error: null,
  });

  React.useEffect(() => {
    const abortApi = new AbortController();
    const signal = abortApi.signal;

    async function chamadaApi() {
      try {
        setState({ data: null, loading: true, error: null });

        const fetchApi = await fetch(url, {
          ...options,
          signal,
        });

        if (!fetchApi.ok) {
          throw new Error("Erro na aplicação");
        }

        const json = (await fetchApi.json()) as Data;
        if (!signal.aborted)
          setState({ data: json, loading: false, error: null });
      } catch (error) {
        if (
          !signal.aborted &&
          error instanceof Error &&
          error.name !== "AbortError"
        ) {
          setState({ data: null, loading: false, error: error.message });
        }
      }
    }

    chamadaApi();

    return () => {
      abortApi.abort();
    };
  }, [url]);

  return state;
};

export default useFetch;
