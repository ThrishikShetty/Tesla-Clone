import React from "react";
import Item from "../../components/Items/Item";
import Model3 from "../../assets/Desktop-Model3.jpeg";
import ModelX from "../../assets/Desktop-ModelX.jpeg";
import SolarPanels from "../../assets/Desktop-SolarPanels.jpeg";
import Modely from "../../assets/Desktop-ModelY.jpeg";
import Models from "../../assets/models.jpg";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="items_container">
      <Item
        title="Model Y"
        desc="Lease starting at $399/mo*"
        descLink=""
        backgroundImg={Modely}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="DEMO DRIVE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Model S"
        desc="Model S
      From $71,090*
      "
        descLink=""
        backgroundImg={Models}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="DEMO DRIVE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Model 3"
        desc="Lease starting at $399/mo*"
        descLink=""
        backgroundImg={Model3}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Model S "
        desc=" From $71,090*After Est. Gas Savings"
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="DEMO DRIVE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
    </div>
  );
}

export default Homepage;
