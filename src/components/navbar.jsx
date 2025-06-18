import { useState } from 'react';
import '../App.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleClick = () => {
    window.alert('This Part Comming Soon');
  }
  return (
    <>
      <nav>
        <div className="nav__content">
          <div className="logo">
            <a href="#">Portofolio</a>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
             <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
          <input type="checkbox" name="check" id="check" placeholder="-" />
          <ul className={`nav__links ${isOpen ? "open" : ""}`}>
            <li><a href="index.html" onClick={closeMenu}>Home</a></li>
            <li><a href="" onClick={handleClick}>About</a></li>
            <li><a href="" onClick={handleClick}>Contact</a></li>
            <li><a href="#" onClick={handleClick}>Portfolio</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}