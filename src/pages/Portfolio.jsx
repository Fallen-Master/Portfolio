import Projects from "../components/Projects";
import projectData from  "../utils/projectData.json"

// const Data = () =>{
//   const [result, setResult] = useState([]);

// } 

const Portfolio = () => {
  return(
    <div>
      {projectData.map((projects, index) => (
        <Projects key={index} {...projects} />
      ))}
    </div>
  )
}
export default Portfolio;
