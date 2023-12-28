import classNames from "classnames";
import React, { useState } from "react";
import projects from "./projectsData";
import "../styles/projectMenu.css"

const ProjectsMenu = () => {
    const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"]; 
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
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
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
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
            <h2 className="title">{item}</h2>
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
