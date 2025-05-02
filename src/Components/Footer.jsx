import './Footer.css';

export default function Footer() {

  return (
    <div className="footer_container" id='contact'>
      <div className="footer_text">
        <h1>
          LET'S CONNECT AND EXPLORE OPPORTUNITIES—{' '}
          <a
            href="mailto:nikhilbokade25@gmail.com?subject=Let's%20Connect"
            className="footer_link"
          >
            SAY HELLO!
          </a>
        </h1>
      </div>

      <div className="footer_socials">
        <ul>
          <li><a href="https://www.linkedin.com/in/nikhilbokade/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/nikhilbokade25" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}
