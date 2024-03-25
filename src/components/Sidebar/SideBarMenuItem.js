import React from "react";
import { NavLink } from "react-router-dom";

const SideBarMenuItem = (props) => {
    const { sideBarMenuItem } = props
  return (
    <NavLink to={sideBarMenuItem.address} className="nav-link active">
      <i className={sideBarMenuItem.icon}></i>
      <p>
        {sideBarMenuItem.label}
         {/* if the badge icon exists */}
        {
            sideBarMenuItem.badge && 
            <span className={sideBarMenuItem.badge.classes}> {sideBarMenuItem.badge.text} </span>}
        {/* if the second icon exists */}
        {sideBarMenuItem.scdIcon && <i className={sideBarMenuItem.scdIcon}></i>}
      </p>
    </NavLink>
  );
};

export default SideBarMenuItem;
