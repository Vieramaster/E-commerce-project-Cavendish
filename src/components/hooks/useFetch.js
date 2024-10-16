import { useState, useEffect } from "react";

/**
 * @param {{ url: string }} props
 * @returns {{ data: JSON[] | null, error: boolean, loading: boolean }}
 */
export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // @ts-ignore
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
