import React from "react";
import { Card } from "../../components/cards/Card";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import "./VehiclesDrop.css";
function Vehicles() {
  return (
    <div className="App">
      <Card
        imgSrc={card1}
        imgAlt="Card Image 1"
        title="Model s"
        lbuttonText="Learn"
        llink="ModelS"
        rbuttonText="Order"
        rlink="ModelS"
      />
      <Card
        imgSrc={card2}
        imgAlt="Card Image 2"
        title="Model 3"
        lbuttonText="Learn"
        llink="Model3"
        rbuttonText="Order"
        rlink="Model3"
      />
      <Card
        imgSrc={card3}
        imgAlt="Card Image 3"
        title="Model x"
        lbuttonText="Learn"
        llink="Modelx"
        rbuttonText="Order"
        rlink="Modelx"
      />
      <Card
        imgSrc={card4}
        imgAlt="Card Image 4"
        title="Model y"
        lbuttonText="Learn"
        llink="Modely"
        rbuttonText="Order"
        rlink="Modely"
      />
      <div className="vertical"></div>
      <div className="textmsg">
        <p>Inventory</p>
        <p>Used Cars</p>
        <p>Demo Drive</p>
        <p>Trade-in</p>
        <p>Help Me </p>
        <p>Compare</p>
        <p>Fleet</p>
        <p>Cybertruck</p>
        <p>Semi</p>
        <p>Roadster</p>
      </div>
    </div>
  );
}

export default Vehicles;
