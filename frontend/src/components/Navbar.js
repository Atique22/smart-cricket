import React from "react";
import logo from "../CRICKET.png"
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
      
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
         <img className="logo" src={logo} alt="logo.." />
        </a>
        <button
          className="navbar-toggler border border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "  ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll"
          >
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                About
              </a>
            </li>
            
            <li className="nav-item">
              <a href="#contact" className="nav-link ">Contact</a>
            </li> 

            <li className="nav-item">
              <a href="/" className="nav-link ">Feature</a>
            </li>
            
            <li className="nav-item">
              <a href="#team" className="nav-link ">Team</a>
            </li>
            
          </ul>
          <Link to="/dashboard"><button className="btn btn-outline-light"><b>Get Started</b></button></Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
