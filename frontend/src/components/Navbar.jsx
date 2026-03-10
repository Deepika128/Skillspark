import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Sparkles className="logo-icon" size={28} />
          <span>SkillSpark</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/login" className="nav-link btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
