import githubWhiteMark from '../image/github-mark-white.png';
import githubMark from'../image/github-mark.png'
import linkedInLogo from '../image/LI-In-Bug.png';


function Footer() {

  return (
    <footer className="footer" role="contentinfo">
      <div className="content ">
        <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer">
          <img src={githubWhiteMark} alt="Github" /> 
        </a>
        <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer">
          <img src={githubMark} alt="Github" /> 
        </a>
        <a href="https://www.linkedin.com/in/rafael-gomez-4a82317b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
