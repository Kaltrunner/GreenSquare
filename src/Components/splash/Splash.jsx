import { useEffect } from "react";
import SplashHeader from "../splashheader/SplashHeader";
import gsap from "gsap";
import "./splash.css";

function Splash() {
  useEffect(() => {
    const splash = document.querySelector(".splash-content-div");
    const square = splash.querySelectorAll(".splash-square");

    const initHero = () => {
      gsap.set(square, { opacity: "0" });
    };

    const showHero = () => {
      gsap.timeline({ defaults: { ease: "expo-out" } }).fromTo(
        square,
        {
          opacity: 0,
          webkitFilter: "blur(2px)",
        },
        {
          duration: 2,
          opacity: 1,
          x: 0,
          webkitFilter: "blur(0px)",
          stagger: 0.015,
        },
        0
      );
    };
    initHero();
    showHero();
  }, []);
  return (
    <div className="splash-body">
      <SplashHeader />
      <div className="splash-content-div">
        <div className="splash-square-div">
          <div className="splash-square"></div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
