import React from "react";
import { Card } from "../../components/cards/Card";
import card1 from "../../assets/Mega-Menu-Charging-Charging.png";
import card2 from "../../assets/Mega-Menu-Charging-Home-Charging.png";
import card3 from "../../assets/Mega-Menu-Charging-Supercharging-NA.png";
import "./Chargedrop.css";
function Chargedrop() {
  return (
    <div className="App2">
      <div className="ch">
        <Card
          imgSrc={card1}
          imgAlt="Card Image 1"
          title="Charging"
          lbuttonText="Learn"
          llink="Charging"
          rbuttonText=""
          rlink="Charging"
        />
        <Card
          imgSrc={card2}
          imgAlt="Card Image 2"
          title="Home Charging"
          lbuttonText="Learn"
          llink="Home-Charging"
          rbuttonText="Shop"
          rlink="Home-Charging"
        />
        <Card
          imgSrc={card3}
          imgAlt="Card Image 3"
          title="Supercharging"
          lbuttonText="Learn"
          llink="Supercharging"
          rbuttonText="Find"
          rlink="Supercharging"
        />
      </div>
      <div className="vertical2"></div>
      <div className="textmsg">
        <p>Charging Calculator</p>
        <p>Trip Planner</p>
        <p>Supercharger Voting</p>
        <p>Host a Supercharger</p>
        <p>Commercial Charging</p>
        <p>Host Wall Connectors</p>
      </div>
    </div>
  );
}

export default Chargedrop;
