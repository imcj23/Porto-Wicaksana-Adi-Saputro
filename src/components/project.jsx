import { useState } from "react";
import "../App.css";
import { projectData } from "../utils/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <img src={selectedProject.image} alt={selectedProject.title}/>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.details}</p>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              <div className="modal-links">
                <a href={selectedProject.demo} target="_blank">
                  Live Demo
                </a>
                <a href={selectedProject.github} target="_blank">
                  GitHub
                </a>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
