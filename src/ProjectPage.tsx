import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectBlock from "./ProjectBlock";

export interface ProjectInfo {
  name: string;
  image: string;
  description: string;
  repo: string;
}

const ProjectPage = () => {

  const [projects, setProjects] = useState<Array<any>>([]);

  const [projectIndex, setProjectIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (projects.length !== 0) {
      return;
    }
    fetch("projects.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProjects(res["projects"]);
      });
  }, []);

  return (
    <div className="page">
      <div className="main-page-redirect" onClick={() => navigate("/")}>
        <h1>Return</h1>
      </div>
      <div
        className="project-arrow left"
        onClick={() =>
          setProjectIndex(
            projectIndex === 0 ? projects.length - 1 : projectIndex - 1
          )
        }
      />
      <div
        className="project-arrow right"
        onClick={() =>
          setProjectIndex(
            projectIndex === projects.length - 1 ? 0 : projectIndex + 1
          )
        }
      />
      <h1>Projects</h1>
      <ProjectBlock {...projects[projectIndex]} />
    </div>
  );
};

export default ProjectPage;
