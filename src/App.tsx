import "./App.scss";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./ProjectPage";

export interface Vector2<T = number> {
  x: T;
  y: T;
}

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/*" element={<ProjectPage />} />
        {/* <Route path="/aboutme" element={null} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
