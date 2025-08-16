import React from "react";
import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1 className="welcome-title">Bienvenido a InspiraTec</h1>
        <p className="welcome-subtitle">
          Tu camino hacia un futuro con confianza, habilidades y visión
        </p>
      </header>

      <main className="welcome-main">
        <button className="welcome-button">Comenzar</button>
      </main>

      <footer className="welcome-footer">
        <p>© 2025 InspiraTec. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Welcome;
