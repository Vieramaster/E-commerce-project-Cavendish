import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

const allowedOrigins = [
  "https://cavendish.vercel.app",
  "https://cavendish-git-main-vieramasters-projects.vercel.app",
  "http://localhost:5173",
  "http://localhost:3001",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

const URL = `https://gnews.io/api/v4/top-headlines?${new URLSearchParams({
  category: "general",
  lang: "en",
  country: "us",
  max: "7",
  apikey: process.env.VITE_API_NEWS,
})}`;

app.get("/api/NewsApi", (_request, response) => {
  fetch(URL)
    .then((apiResponse) => {
      if (!apiResponse.ok) {
        return Promise.reject(
          `Error ${apiResponse.status}: ${apiResponse.statusText}`
        );
      }
      return apiResponse.json();
    })
    .then((data) => {
      if (!Array.isArray(data.articles)) {
        return Promise.reject("Invalid API response");
      }
      response.json(data.articles);
    })
    .catch((error) => {
      console.error("Error getting news:", error);
      response.status(401).json({ message: "Unauthorized", error });
    });
});

export default app;
