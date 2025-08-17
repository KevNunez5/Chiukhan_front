import "./TopicSample.css";
import TopicNavigator from "../../components/TopicsNavigation";
import ChatBot from "../../components/ChatBot"
import cursos from "../../assets/data/cursos2.json";

export default function TopicSample() {
    const curso = cursos[0]; 
    const tema = curso.temas[0]; 
    
    return (
        <div className="max-width">
            <TopicNavigator 
                text={tema.titulo} 
                prevUrl="https://www.youtube.com" 
                nextUrl="https://www.canva.com/" 
            />
            <div className="topic-content">
                <p>{tema.contenido}</p>
            </div>
            <ChatBot />
        </div>
    );
}