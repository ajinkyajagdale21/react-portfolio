import React from "react";
import { projects } from "../data/projects";
let id = 0;
export function ProjectPage() {
  return (
    <>
      <h1 className="heading">Projects</h1>
      <div className="container proj-container">
        <div className="row justify-content-center">
        {projects.map((project) => (
         <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3"> 
          <div
            className="card"
            key={project.pid}
          >
            <div className="card-body">
              <div className="d-flex justify-content-end">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <i className="fa-brands fa-github fa-2x pb-3 px-3"></i>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  {" "}
                  <i className="fa-solid fa-up-right-from-square fa-2x pb-3 "></i>
                </a>
              </div>
              <h5 className="card-title fw-bold fs-4">{project.projectName}</h5>
              <h6 className="card-subtitle my-2 color-pal-1">
                {project.ProjectCategorie}
              </h6>
              <p className="card-text py-2 color-pal-4">
                {project.ProjectDetails}
              </p>
              {project.TechStack.map((item) => (
                <span className="badge text-bg-light m-1 p-1" key={++id}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          </div>
        ))}
        </div>
  </div>
    </>
  );
}
