import SplashHeader from "../splashheader/SplashHeader";
import "./splash.css";

function Splash() {
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
