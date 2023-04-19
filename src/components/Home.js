import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="section">
        <h4 className="color-pal-1 py-1">Hi, my name is</h4>
        <h1 className="color-pal-2 fw-bolder">Ajinkya H Jagadale.</h1>
        <h1 className="color-pal-4 py-1 fw-bolder">
          {" "}
          I build things for the web.
        </h1>
        <h5 className="color-pal-3 py-1">
          I’m a <span className="color-pal-1"> Software Engineer  </span>
          who loves building Websites & Web-apps.
        </h5>
      </div>

      <div className="home" id="About">
        <div>
          <h2 className="color-pal-4 fw-bolder creative-header">
            <span className="color-pal-1 ">01.</span> About Me
          </h2>

          <h5 className="color-pal-3 p-2">
            {" "}
            Creative Full-stack MERN developer & developing responsive websites.
          </h5>
          <h5 className="mx-2">Skills :</h5>
          <div>
            <span className="badge text-bg-light p-2 m-2 fs-6">Javascript</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">React JS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Angular JS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Express JS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">
              Mongoose ODM
            </span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Node JS</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">Git</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">C</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">C++</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">
              Modern libraries and Frameworks
            </span>
            <span className="badge text-bg-light p-2 m-2 fs-6">HTML</span>
            <span className="badge text-bg-light p-2 m-2 fs-6">CSS</span>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_images/1369317140445224961/Tj91NbPc.jpg"
          alt="profile"
          className="mt-5"
          style={{
            width: "15rem",
            height: "15rem",
            padding: "0.5rem",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="section ">
        <h2 className="color-pal-4 fw-bolder" id="Work">
          <span className="color-pal-1">02.</span> Where I've Worked
        </h2>
        <div className="pt-3">
          <p className="fs-5">
          Software Engineer - Frontend{" "}
            <span className="color-pal-1 ">
            @Flairminds Software Pvt. Ltd.
            </span>
          </p>
          <p className="color-pal-4">Oct 2022 - Present</p>
          <ul className="color-pal-3">
            <li>
             I have developed a React.js web application from scratch with a team of two that utilizes an AI-powered Django REST API on the backend. The app
features a responsive design, with Bootstrap and Material UI providing consistent styling and responsiveness across all devices. I integrated the
authentication system using the APIs and used powerful dependencies like Fuse.js for efficient document searching. Additionally, I structured the app
with clean code and thorough documentation. To optimize performance, I implemented lazy loading to ensure a smooth user experience even on
slower internet connections.

            </li>
            <li>
            I developed an Angular project from scratch that features simple, responsive design for multiple pages, I integrated authentication using Firebase
Auth. Additionally, the project consumes a Node.js and Express API that utilizes Firestore as its database. By utilizing TypeScript, I was able to provide
type checking to ensure more reliable and efficient code.

            </li>
            <li>
             Fixed UI issues raised by testing team.
            </li>
          </ul>
        </div>
        <div className="pt-3">
          <p className="fs-5">
            Frontend Developer Intern{" "}
            <span className="color-pal-1 ">
              @OhLocal ( A Product of O2O Mavericks Pvt. Ltd. )
            </span>
          </p>
          <p className="color-pal-4">Nov 2021 - Mar 2022</p>
          <ul className="color-pal-3">
            <li>
             Developed a responsive React.js UI for a blog application, integrated Firebase for authentication and Google Analytics for user tracking.
            </li>
            <li>
            Added SEO techniques to improve the application's visibility and integrated API functionality with the frontend. Resulted in a reliable and highperforming web application with enhanced user engagement.
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2 className="color-pal-4 fw-bolder creative-header">
          <span className="color-pal-1 ">03.</span> Projects
        </h2>
        <p className="fs-5 py-2">
          I have worked on some projects, you should checkout .
        </p>
        <Link className="link" to="/projects">
          <button className="btn link-btn">Browse Projects</button>
        </Link>
      </div>
      <div className="section">
        <h2 className="color-pal-4 fw-bolder creative-header">
          <span className="color-pal-1 ">04.</span> Blogs
        </h2>
        <p className="fs-5 py-2">
          I am also working on some Technical Blogs. You can visit the Blogs
          Here
        </p>
        <Link className="link" to="/blogs">
          <button className="btn link-btn">My Blogs</button>
        </Link>
      </div>
      <div
        className="section text-center "
        style={{ marginBottom: "2rem" }}
        id="Contact"
      >
        <h2 className="color-pal-4 fw-bold "> Get In Touch</h2>
        <a
          className="btn soc-btn"
          href="https://www.linkedin.com/in/ajinkya-h-jagadale-78a899200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="btn soc-btn"
          href="https://github.com/ajinkyajagdale21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="btn soc-btn"
          href="https://instagram.com/ajinkyajagdale21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="btn soc-btn"
          href="https://twitter.com/Ajinkya_J_21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <button
          className="btn soc-btn"
          onClick={() =>
            (window.location = "mailto:ajinkyajagdale21@gmail.com")
          }
        >
          <EmailIcon />
        </button>
      </div>
    </div>
  );
};
