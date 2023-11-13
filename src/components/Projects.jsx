import { Card } from "react-bulma-components";
import './project.css'
const Projects = ({ title, description, image, githubRepoUrl, websiteUrl }) => {
  return (
    <Card style={{ background: "#203f48" }} className="project-card">
      <Card.Header.Title style={{ color: "#c2dce4" }}> {title} </Card.Header.Title>
      <Card.Image size={6} src={image} alt={title} />
      <Card.Content style={{ color: "#c2dce4" }} className="card-content" >
        <div className="project-description">
          {description}
        </div>
      </Card.Content>
      <Card.Footer.Item >
        <a style={{ color: "#de2d2f" }} href={githubRepoUrl} target="_blank" rel="noopener noreferrer"> GitHub Repo </a>
        <a style={{ color: "#de2d2f" }} className="p-2" href={websiteUrl} target="_blank" rel="noopener noreferrer"> Live Demo</a>
      </Card.Footer.Item>
    </Card>
  )
}

export default Projects;