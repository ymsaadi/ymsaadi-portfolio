import React, { useState } from "react";
import classNames from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData.js";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

const MENU_ITEMS = ["FRONT-END", "BACK-END"];

const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

  return (
    <div className="skills-menu">
      {MENU_ITEMS.map((item, index) => (
        <div
          key={index}
          className={classNames("skill-item", {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => handleMenuItemClick(index + 1)}
        >
          <h2 className="skill-title">{item}</h2>
        </div>
      ))}
      <img src={currentIcon} alt="current-skill" className="skill-icon" />
      <div className="skill-sub-container">
        {renderContent(skills[activeMenuItem])}
      </div>
    </div>
  );
};

export default SkillsMenu;
