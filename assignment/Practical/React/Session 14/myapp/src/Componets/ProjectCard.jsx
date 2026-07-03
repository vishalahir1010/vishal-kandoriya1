import React from "react";

function ProjectCard({ title,description,image,technologies,githubLink,liveDemo,}) {
  return (
    <div className="project-card">
      <img src={image} alt={title}   />

      <h2>{title}</h2>

      <p>{description}</p>

      <div>
        {technologies.map((tech, index) => (
          <span key={index}
            style={{marginRight: "8px",
              padding: "5px 10px",
              background: "#eee",
             borderRadius: "5px", }} >
            {tech}
          </span>
        ))}
      </div>

      <br />

      <a href={githubLink} target="_blank" >
        GitHub
      </a>

      <a href={liveDemo} target="_blank" >
        Live Demo
      </a>
    </div>
  );
}

export default ProjectCard;