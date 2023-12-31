import React from "react";
import useSound from "use-sound";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import clickSound from "../assets/click-1.mp3";
import "../styles/nav.css";

const Nav = () => {
  const location = useLocation();
  const [clickTech] = useSound(clickSound, { volume: 0.30 });

  const getNavPositionClass = () => {
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

  const navPosistionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPosistionClass;
  };

  const makeSound = (noSound) => {
    if (!noSound) {
      clickTech()
    }
  }

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass} onClick={() => makeSound(isCurrent)}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPosistionClass}`}>
        {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
        {renderNavLink("/skills", deadEye, "dead eye icon", "nav-skills")}
        {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
        {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
};

export default Nav;
