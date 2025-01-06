/// <reference types="vite/client" />
import { useEffect, useState } from "react";
import "../types"

/**
 * @returns {{newsData: news[], error: boolean, loading: boolean}}
 */
export const useFetchNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_NEWS_KEY = import.meta.env.VITE_API_NEWS_KEY;
  const URL = `https://newsapi.org/v2/top-headlines?q=men&language=en&pageSize=4&apiKey=${API_NEWS_KEY}`;


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    fetch(URL, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status !== "ok") {
          throw new Error(`API error: ${data.message || "Unknown error"}`);
        }
        setNewsData(data.articles || []); 
        setError(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [URL]);

  return { newsData, error, loading };
};
