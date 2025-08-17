import "./Welcome.css";

export default function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <div className="spacer"></div>
                <h1>
                    Tu nueva plataforma de aprendizaje con Inteligencia Artificial Offline
                </h1>
                <div className="spacer"></div>
                <button className="start-button">¡Comenzar!</button>
            </div>
        </div>
    );
}