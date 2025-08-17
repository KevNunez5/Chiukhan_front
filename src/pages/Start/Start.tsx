
import "./Start.css"
import BlueButton from "../../components/BlueButton.tsx";
import ProgressBar from "../../components/ProgressBar.tsx";
// Importa tus componentes reales cuando los tengas listos
// import ProgressBar from "../../components/ProgressBar/ProgressBar"
// import Chat from "../../components/Chat/Chat"

export default function Start() {
    return (
        <div className="start-container">
            {/* Saludo */}
            <h2 className="welcome-text">Bienvenido {"Vekin"}!</h2>

            {/* Progreso general */}
            <div className="progress-section">
                <ProgressBar value={75} version={1} />
            </div>

            {/* Botones de cursos */}
            <div className="courses-section">
                <BlueButton nombre="Curso 1" url="https://udemy.com/curso1" />
                <BlueButton nombre="Curso 1" url="https://udemy.com/curso1" />
                <BlueButton nombre="Curso 1" url="https://udemy.com/curso1" />
            </div>

        </div>
    )
}
