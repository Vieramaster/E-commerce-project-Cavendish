import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();


const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://cavendish.vercel.app"
      : "http://localhost:5173",
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));


const API_NEWS = "5e9e0e2c12a3091fb6a00c637fadf5ad";
const URL = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=7&apikey=${API_NEWS}`;

app.get("/", (req, res) => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(
          `Error ${response.status}: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data.articles)) {
        return Promise.reject("Invalid API response");
      }
      res.json(data.articles);
    })
    .catch((error) => {
      console.error("Error getting news:", error);
      res.status(500).json({ message: "error getting news", error });
    });
});

// Puerto para el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`SV working on http://localhost:${PORT}`);
});
