import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>
);
