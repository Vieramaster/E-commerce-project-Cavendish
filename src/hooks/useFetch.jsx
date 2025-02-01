import { useState, useEffect, useRef } from "react";
import { useProductFinder } from "./useSelectFilters";
import "../types";

/**
 * @param {"/data/clothes_for_e-commerse.json" | "/data/best_sellers.json" } URL
 * @param {string | undefined} category
 * @param {string | null} searchMode
 * @returns {{ data: ClothesObject[], loading: boolean, error: Error | null }}
 */

export const useFetch = (URL, category, searchMode) => {
  const [data, setData] = useState(/** @type {ClothesObject[]} */ ([]));
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
        const entireJson = Object.values(jsonData).flatMap((arr) => arr);

        if (URL === "/data/clothes_for_e-commerse.json") {
          if (searchMode) {
            const searchData = useProductFinder(entireJson, searchMode);
            setData(searchData);
          } else {
            const sliceData = category ? jsonData[category] : entireJson;
            setData(sliceData);
          }
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
  }, [URL, category, useProductFinder]);

  return { data, loading, error };
};
