import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <Link to="/" className="navbar-brand">ClientTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/clientlog" className="nav-link">Client Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}