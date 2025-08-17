import "./Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Welcome() {

    const navigate = useNavigate();
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <div className="spacer"></div>
                <h1>
                    Tu nueva plataforma de aprendizaje con Inteligencia Artificial Offline
                </h1>
                <div className="spacer"></div>
                <button className="start-button" onClick={() => navigate("/start")}>¡Comenzar!</button>
            </div>
        </div>
    );
}
