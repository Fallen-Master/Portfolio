import Projects from "../components/Projects";
import projectData from  "../utils/projectData.json"

import './textColor.css'

const Portfolio = () => {
  return(
    <div className="textColor">
      {projectData.map((projects, index) => (
        <Projects key={index} {...projects} />
      ))}
    </div>
  )
}
export default Portfolio;
