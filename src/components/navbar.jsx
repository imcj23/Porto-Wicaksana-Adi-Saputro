import { useState} from "react";
import ComingSoon from "./modal/ComingSoon";
// import { icons } from "../utils/icon";
// import { getTheme, applyTheme } from "../utils/theme";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [theme, setTheme] = useState(getTheme());
  
  // const DarkIcon = icons.dark;
  // const LightIcon = icons.light;
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // useEffect(() => {
  //   applyTheme(theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  // };

  // const ThemeIcon = theme === "dark" ? icons.light : icons.dark;

  return (
    <>
      <nav className="navbar">
        <div className="nav_content">
          <div className="logo">
            <a href="#" onClick={closeMenu}>Portofolio</a>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"} />
          </div>

          <ul className={`nav__links ${isOpen ? "open" : ""}`}>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>About</a></li>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>Work</a></li>
            <li><a href="#" onClick={() => setIsModalOpen(true)}>Contact</a></li>
            {/* <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              <ThemeIcon size={18} />
            </button> */}
          </ul>

        </div>
      </nav>

      <ComingSoon
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
