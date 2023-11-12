
const Projects = ({ title, description, image, githubRepoUrl, websiteUrl }) => {
  return (
    <div>
      {/* <img src={image} alt= {title} /> */}
      <h3> {title} </h3>
      <p> {description} </p>
      <div>
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer"> GitHub Repo </a>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer"> Live Demo</a>
      </div>
    </div>
  )
}

export default Projects;