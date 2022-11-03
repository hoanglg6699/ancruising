import React, { useRef, useState } from "react";
import "./Intro.css";
import intro from "../assets/Videos/overview.mp4";
import Play from "../assets/Icons/icon-play.png";
import Pause from "../assets/Icons/icon-pause.png";

const Intro = (props) => {
  // const [isPlaying, setIsPlaying] = useState(true);
  const [click, setClick] = useState(false);

  const videoRef = useRef(null);

  const handleClick = () => {
    if (!click) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setClick(!click);
  };

  return (
    <div className="intro">
      {props.isPlaying ? (
        <section className="menu-right">
          <ul className="menu-sub">
            <li className="menu-sub-item">
              <button
                style={{ border: "none", background: "none", outline: 0 }}
                onClick={handleClick}
              >
                {click ? (
                  <img className="menu-sub-item-icon" src={Pause} alt="" />
                ) : (
                  <img className="menu-sub-item-icon" src={Play} alt="" />
                )}
              </button>
            </li>
            <li className="menu-sub-item">
              <span className="line"></span>
            </li>
          </ul>
        </section>
      ) : null}

      {props.isPlaying ? (
        <video
          className="intro-video"
          autoPlay
          muted
          ref={videoRef}
          src={intro}
          type="video/mp4"
          onEnded={() => props.setIsPlaying(false)}
        />
      ) : null}
    </div>
  );
};

export default Intro;
