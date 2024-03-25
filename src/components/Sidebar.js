import React from "react";
import SidebarSearch from './Sidebar/SidebarSearch';
import UserProfilePanel from './Sidebar/UserProfilePanel';
import SidebarMenu from "./Sidebar/SidebarMenu";
const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-light-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">K-FIDELITY</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content */}
        <UserProfilePanel />
        <SidebarSearch />
        <SidebarMenu />
        {/* Add sidebar content */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
