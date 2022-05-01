import { useState } from "react";
import ClickListener from "./ClickListener";
import ProjectBlock from "./ProjectBlock";

export interface ProjectInfo {
  name: string;
  image: string;
  description: string;
  repo: string;
}

const ProjectPage = () => {
  const projects: Array<ProjectInfo> = [
    {
      name: "Portfolio Website",
      description: "This project is this site! It was made using react.js, and ....",
      image: "",
      repo: "https://github.com/NycRat/portfolio",
    },
    {
      name: "3D Tic-Tac-Toe",
      description: "This was a website made with three.js, and ...",
      image: "",
      repo: "https://github.com/NycRat/tic-tac-toe",
    },
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className="page">
      <ClickListener
        position={{ x: 0, y: 800 }}
        size={{ x: 400, y: 200 }}
        onClick={() =>
          setProjectIndex(
            projectIndex === 0 ? projects.length - 1 : projectIndex - 1
          )
        }
      />
      <ClickListener
        position={{ x: 600, y: 800 }}
        size={{ x: 400, y: 200 }}
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
