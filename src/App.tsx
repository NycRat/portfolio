import "./App.scss";
import MainPage from "./Components/MainPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import ProjectPage from "./Components/ProjectPage";
import ClickListener from "./Components/ClickListener";

export interface Vector2<T = number> {
  x: T;
  y: T;
}

export const BASE_SCREEN_SIZE = 1000; // values are 0.1% of width/height of screen

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <ClickListener
        position={{ x: 0, y: 0 }}
        size={{ x: 200, y: 150 }}
        onClick={() => navigate("/")}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/*" element={<ProjectPage />} />
        <Route path="/skills/*" element={null} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
