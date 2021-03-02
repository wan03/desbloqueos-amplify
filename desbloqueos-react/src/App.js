import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./utilities/router/Routes";
import Navbar from "./components/navbar/Navbar";
import 'primereact/resources/themes/md-light-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes />
  </Router>
  );
}

export default App;
