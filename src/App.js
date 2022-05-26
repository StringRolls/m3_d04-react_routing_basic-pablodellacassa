import "./App.css";
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";      // <== IMPORT
import AboutPage from "./pages/AboutPage";    // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage";   // <== IMPORT
import ErrorPage from "./pages/ErrorPage";         // <== IMPORT

import { Switch, Route } from "react-router-dom";  // <== IMPORT


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
