import React from "react";
import "./footer.css";
import logo from "#/logo.svg";
import icon3 from "#/icon3.svg";
import icon2 from "#/icon2.svg";
import icon1 from "#/icon1.svg";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="always">
          <img src={logo} alt="" />
          <p className="lorem">
            I have always striven to fix beauty in wood, stone, glass or
            pottery, that has been my creed.
          </p>
        </div>

        <div className="signal">
          <div className="signalChild">
            <img src={icon1} alt="" />
            <h5 className="ff2">EMAIL</h5>
            <p className="lorem ff1">pompeopotery@gmail.com</p>
          </div>
          <div className="signalChild">
            <img src={icon2} alt="" />
            <h5 className="ff2">FIND</h5>
            <p className="lorem ff1">Central Park, Manhattan New York, 1101</p>
          </div>
          <div className="signalChild">
            <img src={icon3} alt="" />
            <h5 className="ff2">CALL</h5>
            <p className="lorem ff1">+1 292 345 678</p>
          </div>
        </div>
      </div>

      <div className="footer2">
        <p className="lorem">Template design by</p>
        <p>Dorian Hoxha</p>
        <p className="lorem">-</p>
        <p>Image License Info</p>
        <p className="lorem">Powered by</p>
        <p>Webflow</p>
      </div>
    </div>
  );
}
