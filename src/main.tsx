import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Suscription from "./Suscription.tsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Opcional: Importar JavaScript de Bootstrap

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suscription />
  </StrictMode>
);
