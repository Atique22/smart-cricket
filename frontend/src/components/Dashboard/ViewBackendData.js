import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BackendViewData() {
  const [trainingData, setTrainingData] = useState([]);
  const [editData, setEditData] = useState({});
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

  const handleEdit = (data) => {
    console.log("handle close calling" + data.Comment);
    setEditData(data);
    console.log(editData);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/delete/${id}/`)
      .then((response) => {
        if (response.status === 301) {
          const newLocation = response.get("Location");
          axios.delete(newLocation).then((response) => {
            console.log(response);
          });
        } else {
          console.log(response);
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log("error occurs");
        console.error(error);
      });
  };

  // const handleUpdate = (data) => {
  //   axios
  //     .delete(`http://127.0.0.1:8000/delete/${data.id}/`)
  //     .then((response) => {
  //       if (response.status === 301) {
  //         const newLocation = response.get("Location");
  //         axios.delete(newLocation).then((response) => {
  //           console.log(response);
  //         });
  //       } else {
  //         console.log(response);
  //       }
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log("error occurs");
  //       console.error(error);
  //     });
  // };

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
          <Link to="/CreateBackendData">
            <button
              type="button"
              className="btn m-2 btn-outline-primary btn-lg"
            >
              Create
            </button>
          </Link>
          <Link to="/BackendViewData">
            <button
              type="button"
              className="btn m-2 btn-outline-success btn-lg"
            >
              View
            </button>
          </Link>
          {isOpen ? (
            <div className="modal-overlay m-4">
              <div className="modal-content">
                <button onClick={handleClose}>Close</button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.src}
                  height={600}
                />
              </div>
              <div></div>
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
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            handleEdit(trainingData);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => handleOpen(trainingData.Frame)}
                        >
                          View
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            handleDelete(trainingData.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
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
