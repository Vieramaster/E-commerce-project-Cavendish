import { useState, useEffect } from "react";
import "../types";
/**
 *@param {string} url
 * @returns {{ data: ObjectClothes[] | null, error: boolean, loading: boolean }}
 */
export const useApi = (url) => {
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
