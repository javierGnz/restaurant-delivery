import React from "react";

const Section = ({ title, description, children}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-md-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
