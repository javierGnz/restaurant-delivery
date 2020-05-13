import React from "react";
import "./styles.scss";

const Section = ({ title, description, children}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3 className="section__title">{title}</h3>
          <p className="section__description">{description}</p>
        </div>
        <div className="col-md-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
