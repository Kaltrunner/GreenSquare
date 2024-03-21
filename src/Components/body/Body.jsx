import React, { useState, useRef, useEffect } from "react";
import Header from "../header/Header";
import audioFile from "../../assets/Kaltrunner . B-sides - Darth Raven .wav";
import "./body.css";

function Body() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // New state for mute/unmute
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

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted; // Toggle the muted state of the audio
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="body-content-div">
      <Header
        onTogglePlay={playAudio}
        onRestart={restartAudio}
        onToggleMute={toggleMute}
        isMuted={isMuted}
      />
      <div className={`squareContainer ${isAnimating ? "square" : ""}`}>
        <div ref={squareRef} className="square"></div>
      </div>
      <audio autoPlay loop ref={audioRef} src={audioFile} />
    </div>
  );
}

export default Body;
