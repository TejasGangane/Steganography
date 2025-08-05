import "../style/navbar.css";
//import linking property
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="navbarTitle">Steganography</div>
      <ul className="navbarLinks">
        <li className="navbarItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navbarItem">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
