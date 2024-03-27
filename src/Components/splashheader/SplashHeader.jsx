import { Link } from "react-router-dom";
import arrow from "../../assets/icons8-rightward-up-arrow-100.png";
import "./splashheader.css";

function SplashHeader() {
  return (
    <div className="splashheader-content">
      <div className="splash-header-div">
        <h1 className="splash-header">green square</h1>
        <p className="portfolio-links" id="created-text">
          created by:{" "}
          <a
            id="portfolio-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.landpractice.com/"
            alt=""
          >
            Peter
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
          an audio & visual experience
          <Link id="square-link" to="Body">
            ENTER
            <img id="enter-png" src={arrow} />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SplashHeader;
