import React from 'react';
import './cancel.css'; 

function Cancel() {
  return (
    <div className="container text-center mt-5 cancel-container">
      <h1 className="mt-3 text-white">¡Compra cancelada!</h1>
      <a href="/" className="btn btn-danger mt-2">
        Volver a la página principal
      </a>
    </div>
  );
}

export default Cancel;
