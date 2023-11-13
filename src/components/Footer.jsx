// import githubWhiteMark from '../image/github-mark-white.png';
import githubMark from '../image/github-mark.png'
import linkedInLogo from '../image/LI-In-Bug.png';

import './footer.css'

function Footer() {

  return (
    <div className="wrapper footer-color">
      <footer className="" id='bottom-footer' role="contentinfo">
        <div className="content has-text-centered">
          <div className="icons is-flex is-justify-content-center">
            {/* <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={githubWhiteMark} alt="Github" />
            </a> */}
            <a href="https://github.com/Fallen-Master" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={githubMark} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-gomez-4a82317b/" target="_blank" rel="noopener noreferrer" className='icon mx-3'>
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
          </div>
          <div> Rafael Gomez</div>
        </div>
      </footer>
    </div>
  );
  
}

export default Footer;
