import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const rootElement = document.getElementById("root");

rootElement
  ? createRoot(rootElement).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    )
  : console.error("press F to pay respects");
