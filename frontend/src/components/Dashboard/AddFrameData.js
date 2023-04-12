import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error is:", error);
        console.error("Error:", error);
      });
    console.log(formData);
    navigate("/DisplayFramesData");
  };

  return (
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
          <select className="form-control m-2" name="frameType" id="selectId">
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
      <button type="submit" className="btn btn-outline-success btn-lg m-2">
        Save Frame
      </button>
    </form>
  );
}
