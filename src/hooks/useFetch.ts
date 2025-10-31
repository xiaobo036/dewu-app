import { useEffect, useState } from "react";

interface FetchConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  params?: any;
}

const useFetch = (config: FetchConfig) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      const { url, method, headers = {}, params } = config;
      setLoading(true);
      setErrorMsg(null);

      try {
        let finalUrl = url;
        let finalOptions: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          signal: abortController.signal,
        };

        if (method === "GET" && params) {
          const searchParams = new URLSearchParams(params);
          finalUrl = `${url}?${searchParams.toString()}`;
        } else if (params) {
          finalOptions.body = JSON.stringify(params);
        }

        const response = await fetch(finalUrl, finalOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setErrorMsg(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [config.url, config.method, config.params]);

  return { data, loading, errorMsg };
};

export default useFetch;
