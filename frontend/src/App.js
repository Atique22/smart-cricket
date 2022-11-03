// import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./components/Home";
import Team from "./components/Team";
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <Team/>
    {/* <About/> */}
  </>
  );
}

export default App;
