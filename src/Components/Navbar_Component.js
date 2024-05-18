import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar_Component() {
  let Redirect = useNavigate();
  function HandleLogOut() {
    localStorage.clear();
    Redirect("/LoginPage");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              {localStorage.getItem("Auth-Token") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/AddNote">
                    Add Note
                  </Link>
                </li>
              ) : null}
              {localStorage.getItem("Auth-Token") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/YourNote">
                    Your Note
                  </Link>
                </li>
              ) : null}
            </ul>
            <div className="d-flex gap-2">
              {localStorage.getItem("Auth-Token") ? (
                <button
                  className="btn btn-outline-success "
                  onClick={HandleLogOut}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link className="btn btn-outline-success " to={"/LoginPage"}>
                    Login
                  </Link>
                  <Link className="btn btn-outline-primary " to={"/SignupPage"}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar_Component;
