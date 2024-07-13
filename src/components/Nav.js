import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        boxShadow: "0 3px 0px 0 rgba(0,0,0,.2)",
        backgroundColor: "#0A192F",
      }}
    >
      <div className="container-fluid">
        <p className="navbar-brand"> </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex"></form>

          <a className="btn nav-btn" href="/#About">
            <span
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              About
            </span>
          </a>

          <a className="btn nav-btn" href="/#Work">
            <span
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Experience
            </span>
          </a>

          <Link className="link" to="/projects">
            <button
              className="btn nav-btn"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Projects
            </button>
          </Link>
          <Link className="link" to="/blogs">
            <button
              className="btn nav-btn"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Blogs
            </button>
          </Link>

          <a className="btn nav-btn " href="/#Contact">
            <span
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Contact
            </span>
          </a>
          <a
            className="btn nav-btn "
            href="https://drive.google.com/file/d/1wHRpjdb687rSyPGPLYOdxwT12WTCLHI0/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
