import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext";
import { products } from "./data/products";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider catalog={products}>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
