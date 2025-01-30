import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

const allowedOrigins = [
  "https://cavendish.vercel.app",
  "https://cavendish-git-main-vieramasters-projects.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
        ? callback(null, true)
        : callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

const URL = `https://gnews.io/api/v4/top-headlines?${new URLSearchParams({
  category: "general",
  lang: "en",
  max: "7",
  apikey: process.env.VITE_API_NEWS,
})}`;

app.get("/", (_request, response) => {
  fetch(URL)
    .then(async (response) => {
      console.log("Status Code:", response.status);
      if (!response.ok) {
        const errorDetails = await response.text();
        console.error(
          `Error ${response.status}: ${response.statusText} - ${errorDetails}`
        );
        response
          .status(500)
          .json({ message: "Error getting news", error: errorDetails });
      }
      return response.json();
    })
    .then((data) => {
      response.json(data.articles);
    })
    .catch((error) => {
      console.error("Error:", error);
      response.status(500).json({ message: "Error getting news", error });
    });
});

app.use((req, res, next) => {
  console.log("Origin recibido:", req.headers.origin);
  next();
});
