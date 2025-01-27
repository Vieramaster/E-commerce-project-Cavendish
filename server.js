import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://cavendish.vercel.app/"
      : "http://localhost:5173",
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

/**@type {string} */
const API_NEWS = import.meta.env.VITE_API_NEWS;

const URL =`https://gnews.io/api/v4/top-headlines?category=general&lang=ens&max=7&apikey=${API_NEWS}`;

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
      console.log("Data received from API:", data);
      if (!Array.isArray(data.articles)) {
        return Promise.reject("Respuesta inválida de la API");
      }
      res.json(data.articles);
    })
    .catch((error) => {
      console.error("Error getting news:", error);
      res.status(500).json({ message: "Error al obtener noticias", error });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
