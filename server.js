import express from "express";
import cors from "cors";
import fetch from "node-fetch"; 
const app = express();
app.use(cors());

const API_NEWS = process.env.VITE_API_NEWS_KEY;
const URL = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=4&apikey=${API_NEWS}`;


app.get("/", (res) => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        return Promise.reject("Respuesta inválida de la API");
      }
      res.json(data);  
    })
    .catch((error) => {
      console.error("Error getting news:", error);
      res.status(500).json({ message: "Error getting news:", error });
    });
});

app.get("/", (res) => {
    res.send("CORS enabled with express");
  });

