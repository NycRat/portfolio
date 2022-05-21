import { useNavigate } from "react-router-dom";

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
