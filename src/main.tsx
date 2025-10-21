import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

const rootDOM = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootDOM).render(
  <StrictMode>
    <App />
  </StrictMode>
);
