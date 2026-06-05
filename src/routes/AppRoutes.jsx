import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Carrera from "../pages/Carrera";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Carrera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;