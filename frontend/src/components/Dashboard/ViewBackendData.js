import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BackendViewData() {
  const [trainingData, setTrainingData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleOpen = (src) => {
    console.log("src :");
    setIsOpen(true);
    setSelectedImage({ src });
  };

  const handleClose = () => {
    console.log("handle close calling");
    setIsOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    async function getAllTrainingData() {
      try {
        const dataGet = await axios.get("http://127.0.0.1:8000/training/");
        // console.log("student data is: " + students.data);
        setTrainingData(dataGet.data);
      } catch (error) {
        console.log("errors occurs: " + error);
      }
    }
    getAllTrainingData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {isOpen ? (
            <div className="modal-overlay">
              <div className="modal-content">
                <button onClick={handleClose}>Close</button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.src}
                  height={600}
                />
              </div>
            </div>
          ) : (
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Frame</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">comments</th>

                  <th scope="col">Middle</th>
                  <th scope="col">Edge</th>
                  <th scope="col">Missed</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {trainingData.map((trainingData, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{trainingData.id}</th>
                      <td className="w-25">
                        <img
                          src={trainingData.Frame}
                          className="img-fluid img-thumbnail"
                          alt="Frame AI"
                          onClick={() => handleOpen(trainingData.Frame)}
                        />
                      </td>
                      <td>{trainingData.Date}</td>
                      <td>{trainingData.Name}</td>
                      <td>{trainingData.Comment}</td>
                      <td>{trainingData.Middle}</td>
                      <td>{trainingData.Edge}</td>
                      <td>{trainingData.Missed}</td>
                      <td>Edit</td>
                      <td>Delete</td>
                      <td>View</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
