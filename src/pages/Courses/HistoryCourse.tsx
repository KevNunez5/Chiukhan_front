import "./Course.css"
import BlueButton from "../../components/BlueButton.tsx"
import ProgressBar from "../../components/ProgressBar.tsx"
import ChatBot from "../../components/ChatBot.tsx";
import coursesData from "../../assets/data/cursos2.json"

type CourseItem = { nombre: string; url?: string }

type StartProps = {
    courses?: CourseItem[]
    courseName?: string
    progress?: number
}

const DEFAULT_COURSES: CourseItem[] = [
  { nombre: "Curso 1", url: "#" },
  { nombre: "Curso 2", url: "#" },
]

export default function HistoryCourse({
    courses = DEFAULT_COURSES,
    courseName = "",
    progress = 75,
}: StartProps) {
    return (
        <div className="start-container">
            {/* Saludo */}
            <h2 className="welcome-text">
                Curso de Matemáticas
            </h2>

            {/* Progreso general */}
            <div className="progress-section">
                <ProgressBar value={progress} version={2} />
            </div>

            {/* Botones de cursos (solo 2 temas) */}
            <div className="courses-section" aria-label="Lista de cursos">
                {coursesData
                    .flatMap(area => area.temas)
                    .slice(2, 4)
                    .map(tema => (
                        <BlueButton
                            key={tema.titulo}
                            nombre={tema.titulo}
                            url={`/${tema.titulo.replace(/\s+/g, "").toLowerCase()}`}
                        />
                    ))
                }
            </div>

            {/* Chat abajo */}
            <ChatBot />
        </div>
    )
}