import React from 'react'
// import hero_img from "../hero-img.png"
import hero from "../hero1.png"
// import 'react-bootstrap-icons';

const Home = () => {
  return (
    // ======= Hero Section ======= //
    <section id="hero" className="d-flex align-items-center mt-5">
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Cricket Training</h1>
            <h2>We are team of talented designers making websites with differents tools....</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="/" className="m-3"><button type="button" className="btn btn-primary btn-lg">Get Started</button></a>
              <a href="/" className="m-3"><button type="button" className="btn btn-outline-secondary btn-lg">Watch Video</button></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={hero} className="img-fluid animated mb-4" alt="hero images"/>
          </div>
        </div>
      </div>
  
    </section>
  )
}

export default Home