import "./Welcome.css";

export default function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>
                    Tu nueva plataforma de aprendizaje con Inteligencia Artificial Offline
                </h1>
                <button className="start-button">¡Comenzar!</button>
            </div>
        </div>
    );
}
