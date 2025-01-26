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
  const URL = `https://newsapi.org/v2/top-headlines?q=all&language=en&pageSize=10&apiKey=${API_NEWS}`;

  //Being a defective API, the objects that do not provide all its features were purged
  const filterArticles = (/** @type {news[]} */ array) =>
    array.reduce((acc /** @type {news[]} */, item) => {
      if (item.title && item.url && item.urlToImage && item.description) {
        if (acc.length < 4) {
          acc.push(item);
        }
      }
      return acc;
    }, /** @type {news[]} */ ([]));

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status !== "ok" || !Array.isArray(data.articles)) {
          throw new Error(`Invalid API response`);
        }
        setNewsData(filterArticles(data.articles));
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
