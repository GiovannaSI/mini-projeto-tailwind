import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";

import Home from "./components/Home";
import Crafting from "./components/Crafting";
import Machado from './components/Machado';
import Picareta from "./components/Picareta";

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/crafting" element={<Crafting />} />
                <Route path="/machado" element={<Machado />} />
                <Route path="/picareta" element={<Picareta />} />
            </Routes>
        </Router>
    )
}

export default Main;