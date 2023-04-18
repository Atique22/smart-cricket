import React, { useRef, useState } from "react";
import axios from "axios";
// import myVideo from "../../assets/video.mp4";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function VideoCapture({ fileData, source }) {
  const [whichDiv, setWhichDiv] = useState(0);
  // const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const formFrameRef = useRef(null);
  let dataURL;
  const captureFrame = async () => {
    setWhichDiv(1);
    console.log("capture get");
    const canvas = canvasRef.current;
    const video = videoRef.current;
    dataURL = canvas.toDataURL("image/jpeg");
    console.log("capture at front page access:" + dataURL);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  };
  async function sendFrameData() {
    captureFrame();
    const formFrameData = new FormData(formFrameRef.current);
    console.log(formFrameRef);
    if (!formFrameData) {
      console.log("Please enter valid data");
      return;
    } else if (!dataURL) {
      console.log(" image url is not access:" + dataURL);
    }
    try {
      const formData = new FormData();
      console.log("date url is:" + dataURL);
      formData.append("frameName", formFrameData.get("frameName"));
      formData.append("frameType", formFrameData.get("frameType"));
      formData.append("frameComment", formFrameData.get("frameComment"));
      formData.append("frameImage", dataURL);
      console.log("data is :" + JSON.stringify(formData));
      await axios
        .post("http://127.0.0.1:8000/training/", formData)
        .then()
        .then((data) => {
          setWhichDiv(0);
          console.log("send data: " + data);
          alert("Frame data created successfully!");
          // navigate("/DisplayFramesData");
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
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
                detect whether a cricket ball has been hit by a bat or not.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/DisplayFramesData">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg m-1"
                  >
                    Display Capture
                  </button>
                </Link>
                <button
                  onClick={captureFrame}
                  type="button"
                  className="btn btn-outline-success btn-lg m-1"
                >
                  Capture Frame
                </button>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="row">
                <div className="h-100 d-flex mb-5 align-items-center justify-content-center">
                  <video
                    controls
                    ref={videoRef}
                    style={{ width: "800px", height: "400px" }}
                  >
                    <source src={source} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hero-frame" className="d-flex py-15 align-items-center">
        <div className="container mt-5">
          <div className="row">
            <div
              className="col-lg-7 d-flex flex-column justify-content-center pt-0 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <canvas
                ref={canvasRef}
                style={{ width: "600px", height: "360px" }}
              />
            </div>
            <div
              className="col-lg-5 order-0 order-lg-2 "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="h-200 d-flex align-items-center justify-content-center">
                {whichDiv === 1 && (
                  <form
                    className="m-1"
                    ref={formFrameRef}
                    onSubmit={(event) => {
                      event.preventDefault();
                      sendFrameData();
                    }}
                  >
                    <div className="card-body">
                      <div className="form-group">
                        <input
                          type="text"
                          name="frameName"
                          className="form-control m-2"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control m-2"
                          name="frameType"
                          id="selectId"
                        >
                          <option>
                            Select Your Choice- Middle/Edge/Missed Ball{" "}
                          </option>
                          <option>Middle Ball</option>
                          <option>Edge Ball</option>
                          <option>Missed Ball </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="frameComment"
                          className="form-control m-2"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Comment here!"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-lg m-2"
                    >
                      Save Frame
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VideoCapture;
