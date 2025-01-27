/// <reference types="vite/client" />
import { useEffect, useState } from "react";
import "../types";

/**
 * @returns {{newsData: news[], error: boolean, loading: boolean}}
 */
export const useFetchNews = () => {
  const [newsData, setNewsData] = useState(/** @type {news[]} */ ([]));
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const URL =
    import.meta.env.MODE === "production"
      ? "https://cavendish.vercel.app/"
      : "http://localhost:3001";

  const filterArticles = (/** @type {news[]} */ array) =>
    array.reduce((acc /** @type {news[]} */, item) => {
      if (item.title && item.url && item.image && item.description) {
        if (acc.length < 4) {
          acc.push(item);
        }
      }
      return acc;
    }, /** @type {news[]} */ ([]));
    
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch(URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json(); // Se espera una respuesta JSON
      })
      .then((data) => {
        // Verifica si los datos tienen la estructura correcta antes de usarlos
        if (!Array.isArray(data)) {
          throw new Error("Invalid API response");
        }
        setNewsData(filterArticles(data));
        setError(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          console.error(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { newsData, error, loading };
};
