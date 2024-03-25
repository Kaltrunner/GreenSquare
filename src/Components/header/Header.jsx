import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";
import icon from "../../assets/icons8-restart-100.png";
import back from "../../assets/icons8-left-arrow-100.png";
import mute from "../../assets/icons8-mute-64.png";
import volume from "../../assets/icons8-volume-100.png";

function Header({ onRestart, onToggleMute, isMuted }) {
  const [isPlaying, setIsPlaying] = useState(false);
  //removed the onTogglePlay from props

  //   const handleTogglePlay = () => {
  //     setIsPlaying(!isPlaying);
  //     onTogglePlay();
  //   };

  const handleRestart = () => {
    setIsPlaying(false);
    onRestart();
  };

  return (
    <div className="header-content">
      <div className="text-div">
        <Link id="splash-back-link" to="/">
          <button className="body-header-text" id="home-btn">
            {/* home */}
            <img id="home-png" src={back} alt="" />
          </button>
        </Link>
        {/* <p
          className="body-header-text"
          id="play-btn"
          onClick={handleTogglePlay}
        >
          {isPlaying ? "stop" : "play"}
        </p> */}
        <button
          className="body-header-text"
          id="restart-btn"
          onClick={handleRestart}
        >
          {/* restart */}
          <img id="restart-png" src={icon} alt="" />
        </button>
        <button
          className="body-header-text"
          id="mute-btn"
          onClick={onToggleMute}
        >
          {
            isMuted ? (
              <img id="mute-png" src={volume} alt="" /> /* Muted speaker */
            ) : (
              <img id="mute-png" src={mute} alt="" />
            ) /* Speaker */
          }
        </button>
      </div>
    </div>
  );
}

export default Header;
