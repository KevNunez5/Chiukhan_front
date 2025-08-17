import "./Quiz.css";
import NoNext from "../../components/NoNext";
import ChatBot from "../../components/ChatBot";
import QuizButton from "../../components/QuizButton";
import cursos from "../../assets/data/cursos2.json";

export default function QuizMexicanRevolution() {
    const curso = cursos[1]; // "Historia"
    const tema = curso.temas[1]; // "Revolución Mexicana"
    const quiz = curso.quiz;

    return (
        <div className="quiz-section">
            <NoNext 
                text={`Quiz de ${tema.titulo}`}
                prevUrl="https://www.youtube.com" 
            />

            <div className="quiz-questions">
                {quiz.preguntas.map((pregunta, index) => (
                    <div key={index} className="quiz-question">
                        <h3>{pregunta.pregunta}</h3>
                        <div className="quiz-options">
                            {pregunta.opciones.map((opcion, i) => (
                                <QuizButton key={i} nombre={opcion} value={false} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="chat-section">
                <ChatBot />
            </div>
        </div>
    );
}