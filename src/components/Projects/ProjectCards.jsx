import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog = false }) {
  return (
    <div className="project-card-view">
      <img src={imgPath} alt={title} className="card-img-top" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-actions">
          <a href={ghLink} target="_blank" rel="noopener noreferrer" className="project-card-btn">
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>

          {!isBlog && demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card-btn">
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
