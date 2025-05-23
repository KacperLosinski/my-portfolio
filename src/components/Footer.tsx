import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-primary mt-auto">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>Mon-Fri from 9am to 6pm</p>
          <strong>+48 570591154</strong>
        </div>

        <div className="footer-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>I am here to help.</p>
          <strong>kacper.losinski@gmail.com</strong>
        </div>

        <div className="footer-item">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <p>Poland, Pomeranian</p>
          <strong>Gdańsk</strong>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-icons">
        <a href="https://m.me/kacperlosiulosinski/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookMessenger} className="icon hover-effect" />
        </a>
        <a href="https://www.linkedin.com/in/kacper-%C5%82osi%C5%84ski-51997a243/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon hover-effect" />
        </a>
        <a href="https://github.com/KacperLosinski/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon hover-effect" />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Kacper Łosiński, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
