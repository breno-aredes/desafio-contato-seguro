import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthorsProvider } from "./hooks/AuthorsContext";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <AuthorsProvider>
        <App />
      </AuthorsProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
