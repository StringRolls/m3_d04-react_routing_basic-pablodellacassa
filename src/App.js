import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";

import HomePageWithRedirect from "./pages/HomePageWithRedirect"; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePageWithRedirect} />   {/* <== ADD */}
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />

        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
