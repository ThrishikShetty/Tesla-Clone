import React from "react";
import "./items.css";
import Button from "../Button/Button";
const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  leftBtnTxt,
  twoButtons,
}) => {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item_container">
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item_lowerThird">
          <div className="item_buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
