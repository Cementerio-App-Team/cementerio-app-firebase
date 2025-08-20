// src/main.tsx
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Usa el CSS que SÍ existe en tu árbol
import "./App.css";           // ✅ tienes este archivo en src/
// import "./styles/global.css"; // ← usa esta línea SOLO si prefieres el global.css de /styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
