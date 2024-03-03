import React, { useState } from "react";
import Shoplifestyle from "../../dropdowncomponets/shoplifestyle/Shoplifestyle";

function DropdownNavshop() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked " : "dropdown-menu"}
      >
        <Shoplifestyle />
      </ul>
    </>
  );
}

export default DropdownNavshop;
