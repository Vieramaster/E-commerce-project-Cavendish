import { useState, useEffect } from "react";
import "../types";

/**
 * @param {string | undefined } category
 * @returns {{ data:ClothesObject[] , loading: boolean, error: Error | null}}
 */
export const useFetch = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    fetch("/data/clothes_for_e-commerse.json", { signal })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error("trow error"))
      )
      .then((jsonData) => {
        const slicedData = category ? jsonData[category] : jsonData
        setData(slicedData);
      })
      .catch((error) => {
        if (error.name !== "error") {
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
