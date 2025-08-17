import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Welcome />} />
        </Routes>
    );
}
