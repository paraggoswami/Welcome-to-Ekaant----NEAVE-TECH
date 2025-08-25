import "./Navbar.css";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Ekaant Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#gallery">Photo Gallery</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
