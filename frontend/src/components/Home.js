import React from "react";
// import hero_img from "../hero-img.png"
import hero from "../hero1.png";
import { Link } from "react-router-dom";
// import 'react-bootstrap-icons';

const Home = () => {
  return (
    // ======= Hero Section ======= //
    <section id="hero" className="d-flex align-items-center mt-5">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Better Solutions For Cricket Detection and Analysis Tool</h1>
            <h2>
              Join our community today and take your cricket experience to the
              next level!
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/dashboard" className="m-3">
                <button type="button" className="btn btn-primary btn-lg">
                  Get Started
                </button>
              </Link>
              <Link to="/dashboard" className="m-3">
                <button type="button" className="btn btn-primary btn-lg">
                  Dashboard
                </button>
              </Link>
              <Link to="/register" className="m-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Watch Video
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={hero}
              className="img-fluid animated mb-4"
              alt="hero images"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
