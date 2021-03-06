import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const navButtonRef = useRef();
  const linksRef = useRef();

  const collapseNavigation = () => {
    navButtonRef.current.classList.add("collapsed");
    linksRef.current.classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className={"container-fluid " + styles.navigation}>
        <NavLink className="navbar-brand" to="/home">
          MathMaze
        </NavLink>
        <button
          ref={navButtonRef}
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
        <div
          ref={linksRef}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/home"
                onClick={collapseNavigation}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/play"
                onClick={collapseNavigation}
              >
                Play
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/maplist"
                onClick={collapseNavigation}
              >
                Map List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/options"
                onClick={collapseNavigation}
              >
                Options
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/create"
                onClick={collapseNavigation}
              >
                Create Map
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
