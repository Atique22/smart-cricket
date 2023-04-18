import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
// import DisplayCard from "../Dashboard/DisplayCard";
import Team from "../Team";
import VideoCapture from "./VideoCaptureFrame";
import AddFrameData from "./AddFrameData";
function DashboardBody() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(false);
  const [btnText, setBtnText] = useState("Add Frame Data");
  const [showInput, setShowInput] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatusWork = () => {
    if (form === true) {
      setForm(false);
      setBtnText("Add Frame Data");
    } else {
      setForm(true);
      setBtnText("Capture From Video ");
    }
  };
  const [source, setSource] = React.useState();
  const [fileData, setFileData] = useState({
    fileName: "File Name Here",
    fileDate: "File Date Here",
    dataFile: source,
  });

  const handleChange = (event) => {
    setFileData({ ...fileData, [event.target.name]: event.target.value });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    handleChange(event);
    console.log(fileData);
    setSource(url);
  };

  const handleSubmit = (event) => {
    setShowInput(true);
    event.preventDefault();
    console.log(fileData);
    setShow(false);
  };

  return (
    <>
      {!source && showInput === false ? (
        <>
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
                    We offer a unique tool that can help you detect whether a
                    cricket ball has been hit by a bat or not.
                  </h2>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <Link to="/DisplayFramesData" className="m-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                      >
                        Display Capture
                      </button>
                    </Link>
                    <Link to="" className="m-3">
                      <button
                        onClick={handleStatusWork}
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                      >
                        {btnText}
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="row h-100 m-5">
                    {form === false ? (
                      <div className="h-100 d-flex mb-5 align-items-center justify-content-center">
                        <button
                          className="btn btn-outline-dark border-0"
                          onClick={handleShow}
                        >
                          <div className="container-file">
                            <h1>Upload Video </h1>
                            <div className="upload-container">
                              <div className="border-container">
                                <p>
                                  Click here, upload file from
                                  <b> browse</b> your computer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    ) : (
                      <AddFrameData />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Team />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Source File Data </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="fileName"
                    placeholder="Enter Name"
                    autoFocus
                    onChange={handleChange}
                  />
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="fileDate"
                    onChange={handleChange}
                    autoFocus
                  />
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control
                    type="file"
                    name="dataFile"
                    placeholder={source}
                    onChange={handleChange && handleFileChange}
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <VideoCapture
          fileData={fileData}
          source={source}
          setShowInput={setShowInput}
        />
      )}
    </>
  );
}

export default DashboardBody;
