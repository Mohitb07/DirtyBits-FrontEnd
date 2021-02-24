import React, { useState } from "react";
import logo from "../static/logo.svg";
import "./sass/Navbar.css";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (e) => {
    document.getElementById(currentPage).className = "nav-link";
    document.getElementById(e).className = "nav-link active";
    setCurrentPage(e);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbarBack ">
        <a className="navbar-brand textFont pr-4" href="/#">
          <img
            src={logo}
            alt="logo"
            width="40"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          <strong style={{ color: "white" }}>DirtyBits</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-4">
              <a
                className="nav-link active"
                href="/#"
                id="home"
                onClick={() => setPage("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item mr-4">
              <a
                className="nav-link"
                href="/#"
                id="compete"
                onClick={() => setPage("compete")}
              >
                Compete
              </a>
            </li>
            <li className="nav-item mr-4">
              <a
                className="nav-link"
                href="/#"
                id="practice"
                onClick={() => setPage("practice")}
              >
                Practice
              </a>
            </li>
            <li className="nav-item mr-4">
              <a
                className="nav-link"
                href="/#"
                id="blogs"
                onClick={() => setPage("blogs")}
              >
                Blogs
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-3">
            <li className="nav-item dropdown" id="profileDrop">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Himanshu Dhiman
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/#">
                  Profile
                </a>
                <a className="dropdown-item" href="/#">
                  Bookmarks
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/#">
                  Settings
                </a>
                <a className="dropdown-item" href="/#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
