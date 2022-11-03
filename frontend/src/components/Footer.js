import React from 'react'
import logo from "../CRICKET.png"

const Footer = () => {
  return (
    // ======= Footer ======= 
    <footer id="footer">
  
      <div className="footer-top mt-4">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 footer-contact">      
                <img className="logo my-4" src={logo} alt="logo.." />
              <p>
                xxxxx enter Street <br/>
                Nxxxxxx, Pakistan<br/>
                <strong>Phone:</strong> +92 3240539099<br/>
                <strong>Email:</strong> bsce19008@itu.edu.pk<br/>
              </p>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="/">Web Design xxxxxxx </a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="/">Web Design xxxxxxx </a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="/">Web Design xxxxxxx </a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>here you can describe some mmmjh jhjhij ui sdiuiui  ui</p>
              <div className="social-links mt-3">
                <a href="/"><i className="bi bi-twitter"></i></a>
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"> <i className="bi bi-linkedin"></i> </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>Atique</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="">Atique Ahmad</a>
        </div>
      </div>

    </footer>

  )
}

export default Footer