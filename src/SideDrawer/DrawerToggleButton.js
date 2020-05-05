import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = props => (
  <div>
    <button className="toogle_button" onClick={props.click}>
      <div className="toogle_button_line"></div>
      <div className="toogle_button_line"></div>
      <div className="toogle_button_line"></div>
    </button>
  </div>
);
export default DrawerToggleButton;
