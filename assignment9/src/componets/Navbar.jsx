import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ setUser }) => { // Accept setUser as a prop here
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear the user session
    setUser(null); // Update App state using setUser
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="navbar_container">
      <Link to="/" className="navbar_element">Home</Link>
      <Link to="/about" className="navbar_element">About</Link>
      <Link to="/jobs" className="navbar_element">Jobs</Link>
      <Link to="/contact" className="navbar_element">Contact</Link>
      <Link to="/gallery" className="navbar_element">Gallery</Link>
      <div onClick={handleLogout} className="navbar_element" style={{cursor: 'pointer'}}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
