import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
    )
}