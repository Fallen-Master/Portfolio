import projects from '../utils/project.json'

const projects = ({ title, description, image, githubrepourl, websiteurl }) => {
  return (
    <div>
    <img src={ image } />
    </div>
  )
}