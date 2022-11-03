import Navbar from "./components/Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Footer from "./components/Footer";
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <Team/>
    <Footer/>
  </>
  );
}

export default App;
