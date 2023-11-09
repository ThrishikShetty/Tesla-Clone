import React, { useState } from "react";
import "./Navbar.css";
import TeslaLogo from "../../assets/teslaLogo.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import DropdownNav from "../DropdownNav/DropdownNav";
import DropdownNavEnergy from "../DropdownNavEng/DropdownNavEnergy";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownengery, setDropdownenergy] = useState(false);
  const [dropdowncharge, setDropdowncharge] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnterenergy = () => {
    if (window.innerWidth < 960) {
      setDropdownenergy(false);
    } else {
      setDropdownenergy(true);
    }
  };

  const onMouseLeaveenegry = () => {
    if (window.innerWidth < 960) {
      setDropdownenergy(false);
    } else {
      setDropdownenergy(false);
    }
  };
  const onMouseEntercharge = () => {
    if (window.innerWidth < 960) {
      setDropdowncharge(false);
    } else {
      setDropdowncharge(true);
    }
  };

  const onMouseLeavecharge = () => {
    if (window.innerWidth < 960) {
      setDropdowncharge(false);
    } else {
      setDropdowncharge(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={TeslaLogo} alt="Tesla Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="header_center">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Vehicles
              </Link>
              {dropdown && <DropdownNav />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnterenergy}
              onMouseLeave={onMouseLeaveenegry}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Energy
              </Link>
              {dropdownengery && <DropdownNavEnergy />}
            </li>
            {/* <li
              className="nav-item"
              onMouseEnter={onMouseEnterenergy}
              onMouseLeave={onMouseLeaveenegry}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Charging
              </Link>
              {dropdowncharge && <DropdownNavCharge />}
            </li> */}
            <li className="nav-item">
              <Link
                to="/Charging"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Charging
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Discover"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <p>
            <AiOutlineQuestionCircle />
          </p>
          <p>
            <CiGlobe />
          </p>
          <p>
            <IoIosContact />
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
