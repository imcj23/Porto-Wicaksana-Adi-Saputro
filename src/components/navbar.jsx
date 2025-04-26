import '../App.css'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav__content">
          <div className="logo">
            <a href="#">Welcome.....</a>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="ri-menu-line" />
          </label>
          <input type="checkbox" name="check" id="check" placeholder="-" />
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
