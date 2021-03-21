import React, { useState } from "react";
import logo from "../static/logo.svg";
import "./sass/Navbar.css";

import history from '../../history';

function Navbar(props) {
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
              <a style={{color:'white'}}
                className="nav-link active"
                href="/#"
                id="home"
                onClick={() => setPage("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item mr-4">
              <a style={{color:'white'}}
                className="nav-link"
                href="/#"
                id="compete"
                onClick={() => setPage("compete")}
              >
                Compete
              </a>
            </li>
            <li className="nav-item mr-4">
              <a style={{color:'white'}}
                className="nav-link"
                href="/#"
                id="practice"
                onClick={() => setPage("practice")}
              >
                Practice
              </a>
            </li>
            <li className="nav-item mr-4">
              <a style={{color:'white'}}
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
              <a style={{color:'white',borderBottomStyle:'none'}}
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mohit Bisht
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/#">
                  Profile
                </a>
                <a className="dropdown-item" href="/#">
                  Bookmarks
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#logoutModal">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    <div class="modal" id="logoutModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4>Log Out <i class="fa fa-lock"></i></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <p><i class="fa fa-question-circle"></i> Are you sure you want to log-off? <br /></p>
            <div class="actionsBtns">
                <form action="/logout" method="post">
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    <input onClick={()=>history.push('/logout')} type="submit" class="btn btn-default btn-danger" data-dismiss="modal" value="Logout" />
                      <button class="btn btn-default ml-3" data-dismiss="modal">Cancel</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
