import React from "react";

import card1 from "../../assets/Mega-Menu-Energy-Solar-Panels.png";
import card2 from "../../assets//Mega-Menu-Energy-Powerwall-US.png";
import card3 from "../../assets/Mega-Menu-Energy-Megapack.png";
import card4 from "../../assets/Mega-Menu-Energy-Solar-Roof.png";
import "./Shopdrop.css";
import { Card } from "../../components/cards/Card";
function Shopdrop() {
  return (
    <div className="App">
      <div className="sh">
        <Card
          imgSrc={card1}
          imgAlt="Card Image 1"
          title="Solar Panels"
          lbuttonText="Learn"
          llink="ModelS"
          rbuttonText="Order"
          rlink="ModelS"
        />
        <Card
          imgSrc={card2}
          imgAlt="Card Image 2"
          title="Megapack"
          lbuttonText="Learn"
          llink="Model3"
          rbuttonText="Order"
          rlink="Model3"
        />
        <Card
          imgSrc={card3}
          imgAlt="Card Image 3"
          title="Powerwall"
          lbuttonText="Learn"
          llink="Modelx"
          rbuttonText="Order"
          rlink="Modelx"
        />
        <Card
          imgSrc={card4}
          imgAlt="Card Image 4"
          title="Solar Roof"
          lbuttonText="Learn"
          llink="Modely"
          rbuttonText="Order"
          rlink="Modely"
        />
      </div>
      <div className="vertical1"></div>
      <div className="textmsg2">
        <p>Schedule a Consultation</p>
        <p>Why Solar</p>
        <p>Incentives</p>
        <p>Support</p>
        <p>Partner with Tesla</p>
        <p>Commercial</p>
        <p>Utilities</p>
      </div>
    </div>
  );
}

export default Shopdrop;
