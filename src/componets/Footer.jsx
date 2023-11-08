import githubWhiteMark from '../image/github-mark-white.png';
// import githubMark from '../image/github-mark.png'
import linkedInLogo from '../image/LI-In-Bug.png';

import './footer.css'

function Footer() {

  return (
    <div className="wrapper">
      {/* Your page content goes here */}
      {/* You can place your header, main content, etc., above the footer */}
      
      <footer className="footer footerBottom" id='footer-color' role="contentinfo">
        <div className="content has-text-centered">
          <div className="icons is-flex is-justify-content-center">
            <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={githubWhiteMark} alt="Github" />
            </a>
            {/* <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={githubMark} alt="Github" />
            </a> */}
            <a href="https://www.linkedin.com/in/rafael-gomez-4a82317b/" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
  
}

export default Footer;
