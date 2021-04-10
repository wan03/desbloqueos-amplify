import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./shared/router/Routes";
import Layout from "./pages/layout/Layout";

function App() {
  return (
  <Router>
    <Layout>
    <Routes />
    </Layout>
  </Router>
  );
}

export default App;
