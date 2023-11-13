import { Card, Button } from "react-bulma-components";
import './pagesCSS.css'

const Resume = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '2rem' }}>
      <Card style={{ width: "20rem", background: '#c2dce4' }} >
        <Card.Header.Title className="is-centered">Resume <Button color="" >Download</Button> </Card.Header.Title>
        <Card.Content>
          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySql, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Resume

