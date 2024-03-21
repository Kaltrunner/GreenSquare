import React, { useState, useRef, useEffect } from "react";
import Header from "../header/Header";
import "./body.css";

function Body() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= audio.duration) {
        setIsAnimating(false);
      } else {
        setIsAnimating(true);
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      setIsAnimating(false);
      if (isPlaying) {
        audio.play();
      }
    }
  };

  return (
    <div className="body-content-div">
      <Header onTogglePlay={playAudio} onRestart={restartAudio} />
      <div className={`squareContainer ${isAnimating ? "square" : ""}`}>
        <div ref={squareRef} className="square"></div>
      </div>
      <audio
        autoPlay
        loop
        ref={audioRef}
        src="./src/assets/Kaltrunner . B-sides - Darth Raven .wav"
      />
    </div>
  );
}

export default Body;
