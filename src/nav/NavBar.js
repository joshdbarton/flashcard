import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link to="/decks">My Decks</Link>
      </nav>
    );
  }
}

export default NavBar;
