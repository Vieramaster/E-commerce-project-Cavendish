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

  const API_NEWS = import.meta.env.VITE_API_NEWS;
  const URL = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=4&apikey=${API_NEWS}`;

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch(URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data.articles)) {
          throw new Error(`Invalid API response`);
        }
        setNewsData(data.articles);
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
