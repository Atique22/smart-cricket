import Navbar from "./components/Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <Team/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
