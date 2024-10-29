import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './footer.css'

export default function Footer() {
    return (
        <footer id="contact" className="footer">
      <div className="footer-curve">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/megha-bhattarai-73350a261/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin/>
          </a>
          <a href="https://www.instagram.com/meghabhattaraii/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>
        <p className="footer-copyright">&copy; Megha Bhattarai 2024</p>
        <p className="footer-wdndsid">Website Designed and Developed by Siddhartha</p>
      </div>
     
    </footer>
    );
};