import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import MenuDashBoard from "../Dashboard/DashBoardMenu";
import Team from "../Team";
import GraphDashboard from "./GraphDashboard";
export default function DisplayFramesData() {
  const navigate = useNavigate();
  const [trainingData, setTrainingData] = useState([]);
  const [editData, setEditData] = useState({});
  const [whichDiv, setWhichDiv] = useState(0);
  let [totalMiddle, setTotalMiddle] = useState(0);
  let [totalMiss, setTotalMiss] = useState(0);
  let [totalEdge, setTotalEdge] = useState(0);
  const [showGraph, setShowGraph] = useState(true);
  const [btnText, setBtnText] = useState("Build Your Own Graph Chart");
  const handleStatusWork = () => {
    setTotalMiddle(totalMiddle);
    setTotalMiss(totalMiss);
    setTotalEdge(totalEdge);
    if (showGraph === true) {
      setShowGraph(false);
      setBtnText("Frames Data");
    } else {
      setShowGraph(true);
      setBtnText("Build Your Own Graph Chart");
    }
  };
  const [selectedData, setSelectedData] = useState({});

  const handleOpen = (data, divNo) => {
    console.log("src :");
    setWhichDiv(divNo);
    console.log("frame data: " + data.Frame);
    setSelectedData(data);
    if (divNo === 2) {
      handleEdit(data);
    }
  };

  const handleClose = () => {
    console.log("handle close calling");
    setWhichDiv(0);
    setSelectedData(null);
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
        alert("Deleted Successfully");
        setWhichDiv(0);
        setSelectedData(null);
        navigate("/DisplayFramesData");
      })
      .catch((error) => {
        console.log("error occurs");
        console.error(error);
      });
  };

  const handleUpdate = (data) => {
    console.log("update call here");
    axios
      .put(`http://127.0.0.1:8000/update/${data.id}/`, data)
      .then((response) => {
        if (response.status === 301) {
          const newLocation = response.get("Location");
          axios.put(newLocation).then((response) => {
            console.log(response);
          });
        } else {
          console.log(response);
        }
        window.location.reload();
        alert("Update Successfully");
        navigate("/DisplayFramesData");
      })
      .catch((error) => {
        console.log("error occurs");
        console.error(error);
      });
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
    <>
      <MenuDashBoard />
      <div class="d-grid gap-2 bg-dark d-md-flex justify-content-md-end p-2">
        <button
          type="submit"
          onClick={handleStatusWork}
          className="p-2 btn btn-outline-info btn-lg"
        >
          {btnText}
        </button>
      </div>
      {showGraph === true ? (
        <>
          <div className=" align-items-center justify-content-center ">
            <section
              id="hero-display-table"
              className="p-2 text-white align-items-center"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* /////////////////////////////////view frame ///////////////////////////////////// */}
                    {whichDiv === 1 && (
                      <div className="modal-overlay m-4">
                        <div className="modal-content">
                          <button
                            className="btn btn-outline-danger rounded-0"
                            onClick={handleClose}
                          >
                            Close view
                          </button>
                          <img
                            src={selectedData.Frame}
                            alt={selectedData.Frame}
                            height={900}
                          />
                          <ul className="list-group">
                            <li className="list-group-item">
                              Date: {selectedData.Date}
                            </li>
                            <li className="list-group-item">
                              {" "}
                              Name: {selectedData.Name}
                            </li>
                            <li className="list-group-item">
                              Comment: {selectedData.Comment}
                            </li>
                            <li className="list-group-item">
                              Middle: {selectedData.Middle}
                            </li>
                            <li className="list-group-item">
                              {" "}
                              Missed: {selectedData.Edge}
                            </li>
                            <li className="list-group-item">
                              {" "}
                              Edge: {selectedData.Missed}
                            </li>
                          </ul>
                        </div>
                        <div></div>
                      </div>
                    )}
                    {/* /////////////////////////////////UPDATE EDIT frame ///////////////////////////////////// */}
                    {whichDiv === 2 && (
                      <div className="modal-overlay m-4">
                        <div className="modal-content">
                          <button
                            className="btn btn-outline-danger rounded-0"
                            onClick={handleClose}
                          >
                            Close Update
                          </button>
                          <img
                            src={selectedData.Frame}
                            alt={selectedData.Frame}
                            height={900}
                          />
                          <ul className="list-group">
                            <form
                              className="border"
                              onSubmit={(event) => {
                                event.preventDefault();
                                handleUpdate(editData);
                              }}
                            >
                              <li className="list-group-item  border-0">
                                Date: {editData.Date}
                              </li>

                              <li className="list-group-item border-0">
                                {" "}
                                Name:
                                <input
                                  name="Name"
                                  type="text"
                                  className="form-control "
                                  value={editData.Name}
                                  onChange={(event) => {
                                    setEditData({
                                      ...editData,
                                      Name: event.target.value,
                                    });
                                  }}
                                />
                              </li>
                              <li className="list-group-item border-0">
                                Comment:{" "}
                                <input
                                  name="Comment"
                                  type="text"
                                  className="form-control"
                                  row="3"
                                  value={editData.Comment}
                                  onChange={(event) => {
                                    setEditData({
                                      ...editData,
                                      Comment: event.target.value,
                                    });
                                  }}
                                />
                              </li>
                              <div className="d-flex list-group-item">
                                <li className="list-group-item w-5 border-0">
                                  Middle:{" "}
                                  <input
                                    name="Middle"
                                    type="number"
                                    min="0"
                                    max="1"
                                    className="form-control"
                                    value={editData.Middle}
                                    onChange={(event) => {
                                      setEditData({
                                        ...editData,
                                        Middle: event.target.value,
                                      });
                                    }}
                                  />
                                </li>
                                <li className="list-group-item border-0">
                                  {" "}
                                  Missed:{" "}
                                  <input
                                    name="Missed"
                                    type="number"
                                    min="0"
                                    max="1"
                                    className="form-control"
                                    value={editData.Missed}
                                    onChange={(event) => {
                                      setEditData({
                                        ...editData,
                                        Missed: event.target.value,
                                      });
                                    }}
                                  />
                                </li>
                                <li className="list-group-item border-0">
                                  {" "}
                                  Edge:{" "}
                                  <input
                                    name="Edge"
                                    type="number"
                                    min="0"
                                    max="1"
                                    className="form-control"
                                    value={editData.Edge}
                                    onChange={(event) => {
                                      setEditData({
                                        ...editData,
                                        Edge: event.target.value,
                                      });
                                    }}
                                  />
                                </li>
                                <li className="list-group-item mt-2 border-0">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                  >
                                    Update
                                  </button>
                                </li>
                              </div>
                            </form>
                          </ul>
                        </div>
                      </div>
                    )}
                    {/* /////////////////////////////////view table///////////////////////////////////// */}
                    {whichDiv === 0 && (
                      <table className="table mt-5 text-light table-image">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Frame</th>
                            <th scope="col">Date</th>
                            <th scope="col" className="text-truncate">
                              Name
                            </th>
                            <th scope="col" className="text-truncate">
                              comments
                            </th>

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
                            totalMiddle = totalMiddle + trainingData.Middle;
                            totalMiss = totalMiss + trainingData.Missed;
                            totalEdge = totalEdge + trainingData.Edge;
                            // setTotalMiddle(totalMiddle=totalMiddle+trainingData.Middle)
                            // setTotalMiss(totalMiss=totalMiss+trainingData.Missed)
                            // setTotalEdge(totalEdge=totalEdge+trainingData.Edge)
                            return (
                              <tr key={index}>
                                <th scope="row">{trainingData.id}</th>
                                <td className="w-25">
                                  <img
                                    src={trainingData.Frame}
                                    className="img-fluid img-thumbnail"
                                    alt="Frame AI"
                                    onClick={() => handleOpen(trainingData, 1)}
                                  />
                                </td>
                                <td className=" text-truncate">
                                  {trainingData.Date}
                                </td>
                                <td className="text-truncate">
                                  {trainingData.Name}
                                </td>
                                <td className="text-truncate">
                                  {trainingData.Comment}
                                </td>
                                <td>{trainingData.Middle}</td>
                                <td>{trainingData.Edge}</td>
                                <td>{trainingData.Missed}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => {
                                      handleOpen(trainingData, 2);
                                    }}
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-success"
                                    onClick={() => handleOpen(trainingData, 1)}
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
            </section>
            <Team />
            <Footer />
          </div>
        </>
      ) : (
        <GraphDashboard
          middle={totalMiddle}
          edge={totalEdge}
          missed={totalMiss}
        />
      )}
    </>
  );
}
