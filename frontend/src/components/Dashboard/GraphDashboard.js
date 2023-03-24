import React from "react";
import MenuDashBoard from "./DashBoardMenu";
import Team from "../Team";
import Footer from "../Footer";
// import HighChartPie from "../Charts/HighChartPie";
import HighChartReact from "../Charts/HighChartReact";
import { Link } from "react-router-dom";

const GraphDashboard = () => {
  return (
    //  ======= GraphDashboard =======
    <>
      <MenuDashBoard />

      <div className=" align-items-center justify-content-center ">
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>Better Solutions For Your Cricket Training</h1>
                <h2>
                  We are team of talented designers making websites with
                  differents tools....
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <Link to="" className="m-3">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                    >
                      Pie Chart
                    </button>
                  </Link>
                  <Link to="" className="m-3">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                    >
                      Line Graph
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {/* <HighChartPie /> */}
                <HighChartReact />
              </div>
            </div>
          </div>
        </section>
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default GraphDashboard;
