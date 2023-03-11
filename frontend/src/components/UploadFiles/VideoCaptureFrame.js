import React, { useRef } from "react";
import axios from "axios";
// import myVideo from "../../assets/video.mp4";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function VideoCapture({ fileData, source }) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const formFrameRef = useRef(null);
  let dataURL;
  const captureFrame = async () => {
    console.log("capture get");
    const canvas = canvasRef.current;
    const video = videoRef.current;
    dataURL = canvas.toDataURL("image/jpeg");
    console.log("capture at front page access:" + dataURL);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    dataURL = canvas.toDataURL("image/jpeg");
  };
  async function sendFrameData() {
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
      console.log("data is :" + formData);
      await axios
        .post("http://127.0.0.1:8000/training/", formData)
        .then()
        .then((data) => {
          console.log("send data: " + data);
          alert("Frame data created successfully!");
          navigate("/BackendViewData");
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
                We are team of talented designers making websites with
                differents tools....
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <button
                  onClick={captureFrame}
                  type="button"
                  className="btn btn-outline-success btn-lg"
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
                <div className="h-200 d-flex align-items-center justify-content-center">
                  <video controls ref={videoRef}>
                    <source src={source} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-0 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <canvas ref={canvasRef} />
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="row">
                <div className="h-200 d-flex align-items-center justify-content-center">
                  <form
                    className="m-2"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VideoCapture;
