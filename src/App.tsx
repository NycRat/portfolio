import "./App.scss";
import MainPage from "./Components/MainPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import ProjectPage from "./Components/ProjectPage";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/*" element={<ProjectPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
