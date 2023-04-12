import React from "react";
import logo from "../CRICKET.png";

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
                ITU, Ferozepur Road, Lahore, Pakistan.
                <br />
                <strong>Phone:</strong> +92 3240539099
                <br />
                <strong>Email:</strong> bsce19008@itu.edu.pk
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">Services</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">Visionary Cricket Analysis </a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">Bat Ball Detection </a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">Hit Miss Detector </a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/">Smart Cricket Tech </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Connect with us on social media to join the conversation and
                engage with other cricket enthusiasts.
              </p>
              <div className="social-links mt-3">
                <a href="/">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="/">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="/">
                  {" "}
                  <i className="bi bi-linkedin"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Atique</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">Atique Ahmad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
