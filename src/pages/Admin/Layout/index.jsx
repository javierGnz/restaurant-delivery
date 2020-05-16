import React from "react";
import SidebarMenu from "./SidebarMenu";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <main>
      <SidebarMenu />
      <div className="main-wrapper">
        {children}
      </div>
    </main>
  );
};

export default Layout;
