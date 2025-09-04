import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer">
      <footer>
        <p>&copy; {new Date().getFullYear()} Wicaksana. All rights reserved.</p>
        <div className="footer-logo">
            <a href="https://github.com/imcj23" target='blank'><FaGithub /></a>
            <a href="https://linkedin.com/in/wicaksanaadisaputro" target='blank'><FaLinkedin /></a>
            <a href="https://www.instagram.com/wicaksana_as?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'><FaInstagram /></a>
        </div>
      </footer>
    </section>
  );
}
