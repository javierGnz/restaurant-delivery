import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="top">
        <div className="container">
        this is a navbar
        </div>
      </div>
      {children}
      <div className="footer">
        <div className="container">
        this is the footer
        </div>
      </div>
    </div>
  )
}

export default Layout;
