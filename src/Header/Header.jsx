import React, { useState } from "react";
import "./Header.css";
import items from "./menu-items";
import line from "../assets/Icons/line.png";
import navbar_home from "../assets/Icons/icon-home.png";

const Header = (props) => {
  const [icons, setIcons] = useState(items);

  return (
    <ul className="navbar" style={props.isVisible ? {zIndex: 0} : {zIndex: 1}}>
      <li className="navbar-item">
        <a className="navbar-item_img_div" href="/">
          <img className="navbar-item_img" src={navbar_home} alt="" />
        </a>
      </li>
      {icons.map((item, index) => (
        <a key={index} href={item.link} className="navbar-item_wrapper">
          {/* {item.id === index + 1 ? <div>abcde</div> : <div>12345</div>} */}
          <li className="navbar-item">
            <div key={index} className="navbar-item_link" >
                <div className="navbar-item_img_div">
                  <img className="navbar-item_img" src={item.icon} alt="" />
                </div>
                <span className="navbar-item_span">{item.title}</span>
            </div>
          </li>
          <div className="navbar-item_space">
            <img className="navbar-item_space_img" src={line} alt="" />
          </div>
        </a>
      ))}
    </ul>
  );
};

export default Header;
