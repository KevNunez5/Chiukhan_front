import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import TopicSample from "../pages/Topics/TopicSample";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Welcome />} />
            <Route path="/topicsample" element={<TopicSample />} />
        </Routes>
    );
}
