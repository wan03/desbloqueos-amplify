import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./shared/router/Routes";
import Navbar from "./components/navbar/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes />
  </Router>
  );
}

export default App;
