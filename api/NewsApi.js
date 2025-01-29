import express from "express";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://cavendish.vercel.app",
  "https://cavendish-git-main-vieramasters-projects.vercel.app",
  "http://http://localhost:5173/",
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
  max: "7",
  apikey: process.env.VITE_API_NEWS,
})}`;

const url =
  "https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=7&apikey=1f23fd25fcd57c1f8b3407913c12d6d4";

app.get("/", (_request, response) => {
  fetch(url)
    .then((response) =>
      response.ok
        ? response.headers.get("Content-Type") === "application/json"
          ? response.json()
          : Promise.reject("Invalid JSON")
        : Promise.reject(`Error ${response.status}: ${response.statusText}`)
    )
    .then((data) => {
      if (!Array.isArray(data.articles)) {
        return Promise.reject("Invalid API response");
      }
      response.json(data.articles);
    })
    .catch((error) => {
      console.error("Error getting news:", error);
      response.status(500).json({ message: "error getting news", error });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`SV working on http://localhost:${PORT}`);
});
