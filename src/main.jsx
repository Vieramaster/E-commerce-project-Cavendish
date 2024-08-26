import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
