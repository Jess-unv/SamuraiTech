import React from "react";
import "./success.css";

function Success() {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1 className="success-message">¡Muchas gracias!</h1>
        <a href="/" className="btn btn-success mt-2">
          Volver a la página de inicio
        </a>
      </div>
    </div>
  );
}

export default Success;