import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import "./App.scss";
import RouteHandler from "./RouteHandler";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <RouteHandler />
      </main>
    </Router>
  );
}

export default App;
