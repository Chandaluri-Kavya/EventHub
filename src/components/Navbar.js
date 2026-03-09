import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        EventHub
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/bookings">My Bookings</Link>
      </div>

    </nav>
  );
}

export default Navbar;