import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav style={{backgroundColor:'black', color:'white', marginTop:'5%', borderRadius:'4%'}} className=" title navbar text-white navbar-dark bg-dark navbar-expand-md">
        <Link to="/" className="navbar-brand">Get On The Ball</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/clientlog" className="nav-link">Client Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add Client</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}