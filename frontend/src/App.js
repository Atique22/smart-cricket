import Navbar from "./components/Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TrainingDataDashboard from "./components/DashBoardTrainingData"
import FileDataDisplay from "./components/FileDataDisplay"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

     
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={ <> <Navbar /><Home /> <Team /><Contact /><Footer />  </>} />
          <Route path="/dashboard" element={<TrainingDataDashboard />} />
          <Route path="/FileDataDisplay" element={<FileDataDisplay/>} />
        </Routes>
      </BrowserRouter>
      {/* <TrainingDataDashboard /> */}
      
    </>
  );
}

export default App;
