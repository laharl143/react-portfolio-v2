import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

const Nav = () => {
  const location = useLocation();

  const getNavPositionclass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const NavPositionclass = getNavPositionClass();
  const PageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === NavPositionClass;
  };
  return (
    <div>
      <img src={astronautHelmet} />
      <img src={deadEye} />
      <img src={stack} />
      <img src={envelope} />
    </div>
  );
};

export default Nav;
