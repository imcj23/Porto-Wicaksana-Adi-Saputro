import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer">
      <footer>
        <div className="footer-logo">
          <p>
            &copy; {new Date().getFullYear()} Wicaksana. All rights reserved.
          </p>
          <a href="https://github.com/imcj23"><FaGithub /></a>
          <a href="https://linkedin.com/in/wicaksanaadisaputro"><FaLinkedin /></a>
          <a href="https://www.instagram.com/wicaksana_as?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
        </div>
      </footer>
    </section>
  );
}
