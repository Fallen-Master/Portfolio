import { Card } from "react-bulma-components";
import './project.css'
const Projects = ({ title, description, image, githubRepoUrl, websiteUrl }) => {
  return (
    <Card className="project-card">
      <Card.Header.Title> {title} </Card.Header.Title>
      <Card.Image size={6} src={image} alt={title} />
      <Card.Content className="card-content" > 
        <div className="project-description"> 
          {description}
        </div> 
        </Card.Content>
      <Card.Footer.Item>
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer"> GitHub Repo </a>
        <a className="p-2" href={websiteUrl} target="_blank" rel="noopener noreferrer"> Live Demo</a>
      </Card.Footer.Item>
    </Card>
  )
}

export default Projects;