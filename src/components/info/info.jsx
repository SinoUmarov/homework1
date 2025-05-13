import React from "react";
import "./info.css";

const Info = ({ title }) => {
  return (
    <div className="info">
      <h3>{title}</h3>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis
        nostrud exercitationulco laboris nisi ut aliquip ex ea commodo
        consequatuisaute.
      </p>
      <h5>View Details</h5>
    </div>
  );
};

export default Info;
