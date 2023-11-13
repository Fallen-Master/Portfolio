import { Container, Image } from 'react-bulma-components';
import profilePic from '../image/profile.png';
import './pagesCSS.css'
const AboutMe = () => {
  return (
    <Container>
      <div className='textColor pb-3' style={{ padding: '20px' }}>
        <div>
          <h1>About Me</h1>
          <Image className='profile-pic' src={profilePic} alt="Rafael Profile Picture" />
          <section id="about-me">
            <p>Hello! I'm an innovative web developer with a rich background in engineering and a deep understanding of modern web technologies. My journey in web development began with an intensive boot camp where I mastered key technologies across three phases:</p>
            <ul>
              <li><strong>Foundation</strong>: Gained expertise in HTML, CSS, JavaScript, Git, and APIs, including jQuery and Bootstrap.</li>
              <li><strong>Technical</strong>: Developed full-stack capabilities with Node.js, Express.js, MySQL, and MVC frameworks like Handlebars.js, along with proficiency in Object-Oriented Programming and Agile methodologies.</li>
              <li><strong>Performance</strong>: Focused on application optimization using MongoDB, Progressive Web Apps, and the MERN stack.</li>
            </ul>
            <p><strong>Professional Experience:</strong></p>
            <ul>
              <li>At <strong>3P Processing</strong>, I integrated 3D printing in manufacturing processes and streamlined operations using CATIA v5.</li>
              <li>At <strong>Textron Aviation</strong>, I specialized in chemical processing, optimizing workflows for quality assurance.</li>
              <li>At <strong>Orizon Aerostructures</strong>, I led process improvements and team development in aerospace manufacturing.</li>
            </ul>
            <p><strong>Skills:</strong></p>
            <ul>
              <li>Skilled in Microsoft Office, CATIA v5, and interpreting aerospace blueprints.</li>
              <li>Recognized for my initiative, teamwork, and independent problem-solving abilities.</li>
            </ul>
            <p><strong>Education:</strong></p>
            <ul>
              <li>High School Diploma from Northeast Magnet.</li>
              <li>Certificate in CATIA Mechanical Engineering Design from WSU Tech.</li>
            </ul>
            <p>Blending my engineering expertise with comprehensive web development skills, I am passionate about creating efficient, user-focused web applications that leverage the latest technologies.</p>
          </section>

          <a href="/Portfolio">My Portfolio</a> | <a href="/Contact">Contact Me</a>
        </div>
      </div>

    </Container>
  );
};

export default AboutMe;
