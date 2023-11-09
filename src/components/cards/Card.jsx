import React from "react";

import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  rbuttonText,
  rlink,
  lbuttonText,
  llink,
}) => {
  return (
    <div className="card-container">
      <div className="img-conatiner">
        {imgSrc && imgAlt && (
          <img src={imgSrc} alt={imgAlt} className="card-img" />
        )}
        {title && <h5 className="card-title">{title}</h5>}
      </div>
      <div className="btncontainer">
        {lbuttonText && llink && (
          <a href={llink} className="card-btn">
            {lbuttonText}
          </a>
        )}
        {rbuttonText && rlink && (
          <a href={rlink} className="card-btn">
            {rbuttonText}
          </a>
        )}
      </div>
    </div>
  );
};
