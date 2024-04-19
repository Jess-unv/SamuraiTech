import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Footer"; 

import "./index.css"; 

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);

