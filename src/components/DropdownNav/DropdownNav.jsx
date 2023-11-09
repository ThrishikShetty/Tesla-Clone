import React, { useState } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import "./DropdownNav.css";
import { Link } from "react-router-dom";
import VehiclesDrop from "../../dropdowncomponets/vehicles/VehiclesDrop";
function DropdownNav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <VehiclesDrop />
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

export default DropdownNav;
