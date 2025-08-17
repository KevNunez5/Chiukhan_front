import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import BasicAlgebra from "../pages/Topics/BasicAlgebra";
import Geometry from "../pages/Topics/Geometry"
import MexicanIndependence from "../pages/Topics/MexicoIndependence"
import MexicanRevolution from "../pages/Topics/MexicanRevolution"
import QuizBasicAlgebra from "../pages/Quizzes/QuizBasicAlgebra";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Welcome />} />
            <Route path="/basicalgebra" element={<BasicAlgebra />} />
            <Route path="/basicalgebra/quiz" element={<QuizBasicAlgebra />} />
            <Route path="/geometry" element={<Geometry />} />
            <Route path="/mexicanindependence" element={<MexicanIndependence />} />
            <Route path="/mexicanrevolution" element={<MexicanRevolution />} />
        </Routes>
    );
}
