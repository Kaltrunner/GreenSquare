import SplashHeader from "../splashheader/SplashHeader";
import "./splash.css";

function Splash() {
  return (
    <>
      <SplashHeader />
      <div className="splash-content-div">
        <div className="splash-square-div">
          <div className="splash-square"></div>
        </div>
      </div>
    </>
  );
}

export default Splash;
