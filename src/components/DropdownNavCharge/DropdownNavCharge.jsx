import React from "react";
import Chargedrop from "../../dropdowncomponets/charge/Chargedrop";
import { useState } from "react";
import "./DropdownNavCharge.css";
function DropdownNavCharge() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <Chargedrop />
        {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })} */}
      </ul>
    </>
  );
}

export default DropdownNavCharge;
