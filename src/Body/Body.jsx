import React, { useState } from "react";
import "./Body.css";
import MenuLeft from "../Menu_left/Menu_left";
import SwitchView from "../SwitchView/SwitchView";
import React360 from "../React360/React360";
import Intro from "../Intro/Intro";

const Body = (props) => {
  const [isSwitch, setIsSwitch] = useState(true)

  return (
    <div className="body">
      <Intro />
      <React360 dir={isSwitch ? "../assets/Images/have_mountain" : "../assets/Images/without_mountain"} numImages={38} />
      <SwitchView isSwitch={isSwitch} setIsSwitch={setIsSwitch} />
      <MenuLeft isVisible={props.isVisible} setIsVisible={props.setIsVisible} />
    </div>
  );
};

export default Body;