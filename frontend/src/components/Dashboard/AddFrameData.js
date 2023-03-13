import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddFrameData() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    // a.currentValue
    event.preventDefault();
    const formData = new FormData(formRef.current);

    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/training/", formData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.log("Error is:", error);
        console.error("Error:", error);
      });
    console.log(formData);
    navigate("/DisplayFramesData");
  };

  return (
    <div className="container">
      <Link to="/AddFrameData">
        <button type="button" className="btn m-2 btn-outline-primary btn-lg">
          Create
        </button>
      </Link>
      <Link to="/DisplayFramesData">
        <button type="button" className="btn m-2 btn-outline-success btn-lg">
          View
        </button>
      </Link>
      <Link to="/dashboard">
        <button type="button" className="btn m-2 btn-outline-warning btn-lg">
          Go to Dashboard
        </button>
      </Link>
      <div className="well  m-5">
        <div className="">
          <form
            ref={formRef}
            className="form-horizontal"
            onSubmit={handleSubmit}
            onChange={formRef.current}
          >
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="Name"
                  className="form-control m-2"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <input name="Frame" type="file" className="form-control m-2" />
              </div>
              <div className="form-group">
                <select
                  className="form-control m-2"
                  name="frameType"
                  id="selectId"
                >
                  <option>Select Your Choice- Middle/Edge/Missed Ball </option>
                  <option>Middle Ball</option>
                  <option>Edge Ball</option>
                  <option>Missed Ball </option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="Comment"
                  className="form-control m-2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Comment here!"
                ></textarea>
              </div>
            </div>
            {/*<div className="form-group ">
              <label className="col-sm-2 control-label ">Name</label>
              <div className="col-sm-10">
                <input
                  name="Name"
                  className="form-control"
                  type="text"
                  placeholder="enter name"
                />
              </div>
            </div>

            <div className="form-group ">
              <label className="col-sm-2 control-label ">Comment</label>

              <div className="col-sm-10">
                <input name="Comment" className="form-control" type="text" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label ">Frame</label>

              <div className="col-sm-10">
                <input name="Frame" type="file" />
              </div>
            </div>

            <div className="form-group ">
              <label className="col-sm-2 control-label ">Middle</label>

              <div className="col-sm-10">
                <input
                  name="Middle"
                  className="form-control"
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>

            <div className="form-group ">
              <label className="col-sm-2 control-label ">Edge</label>

              <div className="col-sm-10">
                <input
                  name="Edge"
                  className="form-control"
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>

            <div className="form-group ">
              <label className="col-sm-2 control-label ">Missed</label>

              <div className="col-sm-10">
                <input
                  name="Missed"
                  className="form-control"
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div> */}

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
  );
}
