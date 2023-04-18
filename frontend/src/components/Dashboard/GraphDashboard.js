import { React, useState } from "react";
import MenuDashBoard from "./DashBoardMenu";
import Team from "../Team";
import Footer from "../Footer";
import HighChartPie from "../Charts/HighChartPie";
import LineGraph from "../Charts/LineGraph";
// import { Link } from "react-router-dom";

const GraphDashboard = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  Our state-of-the-art technology can accurately determine if
                  the ball has been hit, missed or if there has been a middle
                  edge.
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <button
                    type="button"
                    onClick={handleShow}
                    className="btn m-2 btn-outline-secondary btn-lg"
                  >
                    Pie Chart
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn m-2 btn-outline-secondary btn-lg"
                  >
                    Line Graph
                  </button>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img mb-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {show === true ? (
                  <HighChartPie
                    middle={props.middle}
                    edge={props.edge}
                    missed={props.missed}
                  />
                ) : (
                  <LineGraph
                    middle={props.middle}
                    edge={props.edge}
                    missed={props.missed}
                  />
                )}
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
