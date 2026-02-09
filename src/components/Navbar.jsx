import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <h2>Food Donate Nation</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/ngos">NGOs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;