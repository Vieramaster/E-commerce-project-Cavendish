import { useState, useEffect } from "react";
import "../types";

/**
 * @param {string | undefined} category
 * @returns {{data: ClothesObject[], loading: boolean, error: Error | null}}
 */
export const useFetch = (category) => {
  const [data, setData] = useState(/** @type {ClothesObject[]} */ ([]));

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
        if (!jsonData) throw new Error("invalid data");
        if (category) {
          const slicedData = jsonData[category];
          if (!slicedData) throw new Error("Category not found");
          setData(slicedData);
        } else {
          setData(jsonData);
        }
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
