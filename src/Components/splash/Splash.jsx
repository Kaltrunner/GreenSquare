import { Link } from "react-router-dom";
import "./splash.css";

function Splash() {
  return (
    <div className="splash-content-div">
      <div className="splash-header-div">
        <h1 className="splash-header">green square</h1>
        <p className="portfolio-links">
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
          An audio and visual experience{" "}
          <Link id="square-link" to="Body">
            <span>
              Enter <span id="enter-link">&#8599;</span>
            </span>
          </Link>
        </p>
      </div>
      <div className="splash-square-div">
        <div className="splash-square"></div>
      </div>
    </div>
  );
}

export default Splash;
