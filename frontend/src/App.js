import Navbar from "./components/Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Team from "./components/Team";
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <Team/>
  </>
  );
}

export default App;
