import React from "react";
import "./SwitchView.css";
import { Switch } from "antd";
// import 'antd/dist/antd.css';
import "antd/lib/switch/style/index.css";

const SwitchView = (props) => {
  const handleSwitch = () => {
    props.setIsSwitch(!props.isSwitch);
  };

  return (
    <div className="switch-view">
      <div className="switch-view-btn">
        {props.isSwitch ? (
          <span className="switch-view-left">Tắt Vách Núi</span>
        ) : (
          <span className="switch-view-left">Bật Vách Núi</span>
        )}
        <Switch
          defaultChecked
          style={{ fontSize: "125%", zIndex: 1 }}
          className={props.isSwitch ? "switch-btn" : null}
          onChange={handleSwitch}
        />
      </div>
    </div>
  );
};

export default SwitchView;
