import { useState, useEffect } from "react";
import "../types";

/**
 * @param {"/data/clothes_for_e-commerse.json" | "/data/best_sellers.json" } URL
 * @param {string | undefined} category
 * @returns {{ data: ClothesObject[], loading: boolean, error: Error | null }}
 */
export const useFetch = (URL, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    fetch(URL, { signal })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error("throw error"))
      )
      .then((jsonData) => {
        if (URL === "/data/clothes_for_e-commerse.json") {
          const slicedData = category
            ? jsonData[category]
            : Object.values(jsonData).flatMap((arr) => arr);
          setData(slicedData);
        }
        if (URL === "/data/best_sellers.json") {
          setData(jsonData);
        }
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
  }, [URL, category]);

  return { data, loading, error };
};
