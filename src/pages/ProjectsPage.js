import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";  // <== REMOVE

function ProjectsPage (props) {                    // <== UPDATE
  const [projects, setProjects] = useState([]);

  // This effect depends on `props.projectsData`.
  // It will run on initial render, and every time
  // when the `props.projectsData` updates.
  useEffect(() => {
    setProjects(props.projectsData);                 // <== UPDATE
  }, [props.projectsData]);                       // <== UPDATE


  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
