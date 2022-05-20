import { ProjectInfo } from "./ProjectPage";

const ProjectBlock = (props: ProjectInfo) => {
  return (
    <div className="project-block">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a className="link" href={props.repo}>Repository</a>
    </div>
  );
};

export default ProjectBlock;
