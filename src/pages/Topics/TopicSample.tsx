import "./TopicSample.css";
import TopicNavigator from "../../components/TopicsNavigation";

export default function TopicSample() {
    return (
        <div className="max-width">
            <TopicNavigator 
                text="Tema 2" 
                prevUrl="https://www.youtube.com" 
                nextUrl="https://www.canva.com/" 
            />
        </div>
    );
}