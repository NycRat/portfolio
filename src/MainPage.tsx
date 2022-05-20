import { useNavigate } from "react-router-dom";
import { Vector2 } from "./App";

interface PageInfo {
  position: Vector2;
  size: Vector2;
  pageName: string;
}

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Eric Xiao</h1>
      <p>Fullstack Software developer</p>

      <div className="page-redirect left" onClick={() => navigate("/projects")}>
        <h1>Projects</h1>
      </div>
      <div className="page-redirect right" onClick={() => navigate("/aboutme")}>
        <h1>About me</h1>
      </div>
    </div>
  );
};

export default MainPage;
