import { useState, useEffect } from "react";
import "../types";

/**
 * @param {string | undefined } category
 * @returns {{ data: ClothesObject[] | ClothesCategory, loading: boolean, error: Error | null }}
 */
export const useFetch = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    fetch("/data/clothes_for_e-commerse.json", { signal })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error("throw error"))
      )
      .then((jsonData) => {
        const slicedData = category ? jsonData[category] : jsonData;
        setData(slicedData);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [category]);

  return { data, loading, error };
};
