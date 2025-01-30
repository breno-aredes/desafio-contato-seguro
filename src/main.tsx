import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthorsProvider } from "./hooks/AuthorsContext";
import { BooksProvider } from "./hooks/BooksContext";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <AuthorsProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </AuthorsProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
