import classNames from "classnames";
import React, { useState } from "react";
import useSound from "use-sound";
import projects from "./projectsData";
import "../styles/projectMenu.css";
import clickSound from "../assets/click-2.mp3";

const ProjectsMenu = () => {
  // const projectItems = ["Microservices", "MyGameList API", "PROJECT THREE"];
  const projectItems = ["Microservices", "MyGameList API"];
  const [activeProject, setActiveProject] = useState(1);
  const [clickTech] = useSound(clickSound, { volume: 0.25 });

  const handleProjectClick = (project) => {
    setActiveProject(project);
    clickTech();
  };

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} />
        <div>{project.description}</div>
        <div className="link-container">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a> */}
        </div>
      </div>
    ));
  };

  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            className={classNames("project-item", {
              activeProject: activeProject === index + 1,
            })}
            key={index}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="project-title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
};

export default ProjectsMenu;
