import React, { useState } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import "./DropdownNavEnergy.css";
import { Link } from "react-router-dom";
import VehiclesDrop from "../../dropdowncomponets/vehicles/VehiclesDrop";
import Shopdrop from "../../dropdowncomponets/shop/Shopdrop";
function DropdownNav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <Shopdrop />
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
