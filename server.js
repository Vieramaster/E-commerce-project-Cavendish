import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        const blocked = process.env.NODE_ENV === "production" &&
            origin !== "https://cavendish.vercel.app";

        callback(blocked ? new Error("Not allowed by CORS") : null, !blocked);
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
}));

const URL = `https://gnews.io/api/v4/top-headlines?${new URLSearchParams({
    apikey: process.env.VITE_API_NEWS,
    category: "general",
    lang: "en",
    max: "7",
})}`;

app.get("/", (_request, response) => {
    fetch(URL)
        .then((response) =>
            // Cambio principal:
            response.ok
                ? response.headers.get("Content-Type") === "application/json"
                    ? response.json()
                    : Promise.reject("Invalid JSON")
                : Promise.reject(
                    `Error ${response.status}: ${response.statusText}`,
                )
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

// Puerto para el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`SV working on http://localhost:${PORT}`);
});