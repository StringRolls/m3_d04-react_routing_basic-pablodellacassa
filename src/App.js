import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";
import HomePageWithRedirect from "./pages/HomePageWithRedirect";

import projectsData from './projects-data.json';     // <== IMPORT 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePageWithRedirect} />
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/projects" component={ProjectsPage} /> */}

        <Route
          path="/projects"
          render={(routeProps) => {
            return <ProjectsPage {...routeProps} projects={projectsData} />;
          }}
        />

        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
