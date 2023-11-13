import Projects from "../components/Projects";
import projectData from "../utils/projectData.json"
import { Container, Columns } from "react-bulma-components";
import './pagesCSS.css'

const Portfolio = () => {
  return (
    <Container>
      <Columns className="is-multiline" >
          {projectData.map((projects, index) => (
            <Columns.Column className="column-width" size={3} key={index}>
              <Projects {...projects} />
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  )
}
export default Portfolio;
