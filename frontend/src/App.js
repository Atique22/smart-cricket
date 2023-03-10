import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Footer from "./components/Footer";
import VideoCapture from "./components/UploadFiles/VideoCaptureFrame";

// import Contact from "./components/Contact";
import TrainingDataDashboard from "./components/Dashboard/DashBoardTrainingData";
import FileDataDisplay from "./components/UploadFiles/FileDataDisplay";
import BackendViewData from "./components/Dashboard/ViewBackendData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBackendData from "./components/Dashboard/CreateBackendData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Navbar />
                <Home /> <Team />
                <Footer />{" "}
              </>
            }
          />
          <Route path="/dashboard" element={<TrainingDataDashboard />} />
          <Route path="/video" element={<VideoCapture />} />
          <Route path="/FileDataDisplay" element={<FileDataDisplay />} />
          <Route path="/BackendViewData" element={<BackendViewData />} />
          <Route path="/CreateBackendData" element={<CreateBackendData />} />
        </Routes>
      </BrowserRouter>
      {/* <TrainingDataDashboard /> */}
    </>
  );
}

export default App;
