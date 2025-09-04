import { useState } from "react";
import Modal from "./modal/comingsoon";
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav>
        <div className="nav_content">
          <div className="logo">
            <a href="#" onClick={closeMenu}>Portofolio</a>

          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
          <input type="checkbox" name="check" id="check" placeholder="-" />
          <ul className={`nav__links ${isOpen ? "open" : ""}`}>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>About</a></li>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>Contact</a></li>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>Portfolio</a></li>
          </ul>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={() =>setIsModalOpen(false)}/>
    </>
  );
}