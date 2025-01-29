import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const blocked =
        process.env.NODE_ENV === "production" &&
        origin !== "https://cavendish.vercel.app";

      callback(blocked ? new Error("Not allowed by CORS") : null, !blocked);
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

const URL = `https://gnews.io/api/v4/top-headlines?${new URLSearchParams({
  category: "general",
  lang: "en",
  max: "7",
  apikey: "1f23fd25fcd57c1f8b3407913c12d6d4",
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


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`SV working on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
