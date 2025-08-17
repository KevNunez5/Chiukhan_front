import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Start from "../pages/Start/Start.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Welcome />} />
            <Route path="/start" element={<Start/>} />
        </Routes>
    );
}
