import { Link } from "react-router-dom";
import arrow from "../../assets/icons8-rightward-up-arrow-100.png";
import "./splashheader.css";

function SplashHeader() {
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
