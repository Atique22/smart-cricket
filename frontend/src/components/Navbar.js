import React from "react";
import logo from "../CRICKET.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      
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
            // style="--bs-scroll-height: 100px;" style={{color: "#fff"}}
          >
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            
            <li className="nav-item">
              <a href="/" className="nav-link ">Contact</a>
            </li> 

            <li className="nav-item">
              <a href="/" className="nav-link ">Feature</a>
            </li>
          </ul>
          <a href="/"><button className="btn btn-outline-success"><b>Get Started</b></button></a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
