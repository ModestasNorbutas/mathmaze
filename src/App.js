import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CreateMap from "./pages/CreateMap";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Play from "./pages/Play";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/options" element={<Options />} />
        <Route path="/create" element={<CreateMap />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}
