import React from "react";
import { Card } from "../../components/cards/Card";
import "./shoplifestyle.css";
import card1 from "../../assets/Mega-Menu-Shop-Apparel.png";
import card2 from "../../assets/Mega-Menu-Shop-Lifestyle.png";
import card3 from "../../assets/Mega-Menu-Shop-Charging.png";
import card4 from "../../assets/Mega-Menu-Shop-Vehicle-Accessories.png";
function Shoplifestyle() {
  return (
    <div className="App1">
      <Card
        imgSrc={card1}
        imgAlt="Card Image 1"
        title="Apparel"
        lbuttonText=""
        llink="Apparel"
        rbuttonText=""
        rlink="Apparel"
      />
      <Card
        imgSrc={card2}
        imgAlt="Card Image 2"
        title="Lifestyle"
        lbuttonText=""
        llink="Lifestyle"
        rbuttonText=""
        rlink="Lifestyle"
      />
      <Card
        imgSrc={card3}
        imgAlt="Card Image 3"
        title="Charging"
        lbuttonText=""
        llink="Charging"
        rbuttonText=""
        rlink="Charging"
      />
      <Card
        imgSrc={card4}
        imgAlt="Card Image 4"
        title="Vehical Accessories"
        lbuttonText=""
        llink="Accessories"
        rbuttonText=""
        rlink="Accessories"
      />
    </div>
  );
}

export default Shoplifestyle;
