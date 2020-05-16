import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      {children}
    </>
  );
};

export default Layout;
