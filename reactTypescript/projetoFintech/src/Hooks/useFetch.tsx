import React from "react";

const useFetch = <T,>(url: string, options?: RequestInit) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const abortApi = new AbortController();
    const signal = abortApi.signal;

    async function chamadaApi() {
      try {
        setData(null);
        setLoading(false);

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
          setLoading(false);
        }
      } catch (error) {
        if (
          !signal.aborted &&
          error instanceof Error &&
          error.name !== "AbortError"
        ) {
          setData(null);
          setLoading(true);
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
