import React from "react";
import "./Dicover.css";
function Discover() {
  return (
    <div className="App">
      <div className="container">
        <div className="textmsg">
          <span>Resources</span>
          <p>Demo Drive</p>
          <p>Insurance</p>
          <p>Video Guides</p>
          <p>Customer Stories</p>
          <p>Events</p>
        </div>
      </div>
      <div className="container">
        <div className="textmsg">
          <span>Location Services</span>

          <p>Find Us</p>
          <p>Trip Planner</p>
          <p>Find a Collision Center</p>
          <p>Find a Certified Installer</p>
        </div>
      </div>
      <div className="container">
        <div className="textmsg">
          <span>Company</span>

          <p>About</p>
          <p>Careers</p>
          <p>Investor Relations</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
