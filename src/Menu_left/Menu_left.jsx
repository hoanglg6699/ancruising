import React, { useEffect, useRef, useState } from "react";
import "./Menu_left.css";
import music from "../assets/Sounds/SoundOfWaves.mp3";
import InVoice from "../assets/Icons/menu-sub/icon-voice.png";
import Mute from "../assets/Icons/menu-sub/icon-voice-pause.png";
import Guide_icon from "../assets/Icons/menu-sub/icon-guide.png";
import Popup_guide from "../assets/Icons/icon-tutorial.png";

const MenuLeft = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);

  const ref = useRef(null);

  const handleClick = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      ref.current.play();
      ref.current.volume = 0.1;
    } else {
      ref.current.pause();
    }
  };

  const handleVisible = () => {
    props.setIsVisible(!props.isVisible);
  };

  return (
    <section className="menu-left">
      <ul className="menu-sub">
        <li className="menu-sub-item">
          <button style={{border: 'none', background: 'none'}} onClick={handleClick}>
            {isPlaying ? (
              <img className="menu-sub-item-icon" src={InVoice} alt="" />
            ) : (
              <img className="menu-sub-item-icon" src={Mute} alt="" />
            )}
          </button>
          <audio src={music} ref={ref} loop />
        </li>
        <li className="menu-sub-item">
          <button style={{border: 'none', background: 'none'}} onClick={handleVisible}>
            <img className="menu-sub-item-icon" src={Guide_icon} alt="" />
          </button>
        </li>
      </ul>
      {props.isVisible ? <div className="guide-icon-opacity" ></div> : null}
      <div className="guide-icon">
        {props.isVisible ? <img className="guide-icon_img" src={Popup_guide} alt="" /> : null}
        {props.isVisible ? <a onClick={handleVisible}> </a> : null}
      </div>
    </section>
  );
};

export default MenuLeft;
