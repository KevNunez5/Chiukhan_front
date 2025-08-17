import "./curso.css"
import BlueButton from "../../components/BlueButton"
import ProgressBar from "../../components/ProgressBar"


type CourseItem = { nombre: string; url?: string }

type StartProps = {
    courses?: CourseItem[]       // ← lista que te mandan
    courseName?: string            // opcional para saludo
    progress?: number            // opcional para la barra
}

const DEFAULT_COURSES: CourseItem[] = [
    { nombre: "Curso 1", url: "#" },
    { nombre: "Curso 2", url: "#" },
    { nombre: "Curso 3", url: "#" },
]

export default function Start({
                                  courses = DEFAULT_COURSES,
                                  courseName = "",
                                  progress = 75,
                              }: StartProps) {
    return (
        <div className="start-container">
            {/* Saludo */}
            <h2 className="welcome-text">
                Curso{courseName ? ` ${courseName}` : ""}
            </h2>

            {/* Progreso general */}
            <div className="progress-section">
                <ProgressBar value={progress} version={2} />
            </div>

            {/* Botones de cursos (scrolleable) */}
            <div className="courses-section" aria-label="Lista de cursos">
                {courses.map((c, i) => (
                    <BlueButton key={`${c.nombre}-${i}`} nombre={c.nombre} url={c.url ?? "#"} />
                ))}
            </div>

            {/* Chat abajo */}

        </div>
    )
}
