import React, { useState } from "react";
import useSound from "use-sound";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import clickSound from "../assets/click-2.mp3";

const MENU_ITEMS = ["PERSONAL", "EDUCATION", "CAREER"];

const AboutMenu = (props) => {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubheading, setActiveSubheading] = useState(1);
  const [clickTech] = useSound(clickSound, { volume: 0.25 });
  const [clickTechHigh] = useSound(clickSound, { playbackRate: 1.4, volume: 0.25 });

  const handleMenuItemClick = (menuItem) => {
    if (menuItem !== activeMenuItem) {
      clickTech();
    }
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading) => {
    if (subheading !== activeSubheading) {
      clickTechHigh();
    }
    setActiveSubheading(subheading);
  };

  const activeMenuTitle = MENU_ITEMS[activeMenuItem - 1];
  const activeMenuIcon =
    activeMenuTitle === "PERSONAL"
      ? personalIcon
      : activeMenuTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;
  const subheadings = subheadingsData[activeMenuItem];

  return (
    <>
      <div className="menu">
        {MENU_ITEMS.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings.map((item, index) => (
          <AboutSubheading
            key={index}
            title={item.title}
            content={item.content}
            active={activeSubheading === index + 1}
            menuItem={activeMenuItem}
            onClick={() => handleSubheadingClick(index + 1)}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMenu;
