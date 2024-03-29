import { useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons8-rightward-up-arrow-100.png";
import gsap from "gsap";
import "./splashheader.css";

function SplashHeader() {
  useEffect(() => {
    const splash = document.querySelector(".splash-header-div");
    const splashTitle = splash.querySelectorAll(".splash-header");
    // const text = splash.querySelectorAll(".splash-p");
    // const created = splash.querySelectorAll(".portfolio-links");

    const initHero = () => {
      gsap.set(splashTitle, { x: "-10%" });
      // gsap.set(text, { x: "-10%" });
      // gsap.set(created, { x: "10%" });
    };

    const showHero = () => {
      gsap.timeline({ defaults: { ease: "expo-out" } }).fromTo(
        splashTitle,
        {
          opacity: 0,
          webkitFilter: "blur(1px)",
        },
        {
          duration: 1.25,
          opacity: 1,
          x: 0,
          webkitFilter: "blur(0px)",
          stagger: 0.015,
        },
        0
      );
      // .fromTo(
      //   text,
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     duration: 1.25,
      //     opacity: 1,
      //     x: 0,
      //     stagger: 0.015,
      //   },
      //   0
      // )
      // .fromTo(
      //   created,
      //   {
      //     opacity: 0,
      //   },
      //   {
      //     duration: 1.25,
      //     opacity: 1,
      //     x: 0,
      //     stagger: 0.015,
      //   },
      //   0
      // );
    };
    initHero();
    showHero();
  }, []);
  return (
    <div className="splashheader-content">
      <div className="splash-header-div">
        <h1 className="splash-header">green square</h1>
        <div className="splash-text-div">
          <p className="portfolio-links" id="created-text">
            created by{" "}
            <a
              id="portfolio-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.landpractice.com/"
              alt=""
            >
              Peter Russell
            </a>{" "}
            &
            <a
              id="portfolio-link"
              target="_blank"
              rel="noreferrer"
              href="https://erikmrussell.com/"
              alt=""
            >
              {" "}
              Erik Russell
            </a>
          </p>
          <p className="splash-p">
            An audio-visual exploration
            <Link id="square-link" to="Body">
              ENTER
              <img id="enter-png" src={arrow} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplashHeader;
