import React from 'react'
import hero_img from "../hero-img.png"
const Home = () => {
  return (
    // <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
  
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Cricket Training</h1>
            <h2>We are team of talented designers making websites with differents tools....</h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <a href="/" class="btn-get-started scrollto">Get Started</a>
              <a href="https://www.youtube.com" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={hero_img} class="img-fluid animated" alt="hero images"/>
          </div>
        </div>
      </div>
  
    </section>
  )
}

export default Home