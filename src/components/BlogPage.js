import React from "react";
import { blogs } from "../data/blog";

export function BlogPage() {
  return (
    <>
      <h1 className="heading">Blogs</h1>
      <div className="blog-page">
        {blogs.map((blog) => (
          <a
            className="card text-decoration-none"
            style={{
              width: "18rem",
              color: "white",
              backgroundColor: "#19314B",
              margin: "1rem",
              padding: "1rem 1rem",
            }}
            key={blog.bId}
            href={blog.blogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-body">
              <i className="fa-solid fa-up-right-from-square fa-2x pb-3 d-flex justify-content-end"></i>
              <h5 className="card-title fw-bold fs-4">{blog.topicName}</h5>
              <h6 className="card-subtitle my-2 color-pal-1">{blog.date}</h6>
              <p className="card-text py-2 color-pal-4">{blog.initialLines}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
