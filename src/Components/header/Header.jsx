import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";
import icon from "../../assets/icons8-restart-100.png";
import back from "../../assets/icons8-left-arrow-100.png";
import mute from "../../assets/icons8-mute-64.png";
import volume from "../../assets/icons8-volume-100.png";
import menu from "../../assets/icons8-down-100.png";

function Header({ onRestart, onToggleMute, isMuted }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRestart = () => {
    setIsPlaying(false);
    setIsDropdownOpen(false);
    onRestart();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header-content">
      <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
        <button id="menu-btn" onClick={toggleDropdown}>
          <img id="menu-png" src={menu} alt="" />
        </button>
        <div className="dropdown-menu">
          {" "}
          <div className="text-div">
            <Link id="splash-back-link" to="/">
              <button className="body-header-text" id="home-btn">
                <img id="home-png" src={back} alt="" />
              </button>
            </Link>
            <button
              className="body-header-text"
              id="restart-btn"
              onClick={handleRestart}
            >
              <img id="restart-png" src={icon} alt="" />
            </button>
            <button
              className="body-header-text"
              id="mute-btn"
              onClick={onToggleMute}
            >
              {
                isMuted ? (
                  <img id="mute-png" src={mute} alt="" /> /* Muted speaker */
                ) : (
                  <img id="mute-png" src={volume} alt="" />
                ) /* Speaker */
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
