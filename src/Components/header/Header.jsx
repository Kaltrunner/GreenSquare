import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";

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
          <p className="body-header-text" id="home-btn">
            home
          </p>
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
          restart
        </button>
        <button
          className="body-header-text"
          id="mute-btn"
          onClick={onToggleMute}
        >
          {isMuted ? "unmute" /* Muted speaker */ : "mute" /* Speaker */}
        </button>
      </div>
    </div>
  );
}

export default Header;
