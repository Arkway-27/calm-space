import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./store/ThemeProvider";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
