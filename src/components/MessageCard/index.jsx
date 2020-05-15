import React from "react";
import "./styles.scss";

const MessageCard = ({ icon, title, description}) => {
  return (
    <div class="card card--message">
      <div class="card-body">
        <div class="media">
          <div className="align-self-center mr-3">
            {icon}
          </div>
          <div class="media-body">
            <h6 class="mb-0">{title}</h6>
            <span className="text-black-50">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
