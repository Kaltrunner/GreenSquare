import { Routes, Route } from "react-router-dom";
import Splash from "./Components/splash/Splash";
import Body from "./Components/body/Body";
import SplashHeader from "./Components/splashheader/SplashHeader";
import Header from "./Components/header/Header";
// import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  return (
    <>
      {/* <AnimatedCursor
        innerSize={0}
        outerSize={20}
        color="76,187,23"
        outerAlpha={1}
        innerScale={1}
        outerScale={0}
        trailingSpeed={10}
        hasBlendMode={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "#restart-btn",
        ]}
      /> */}

      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/SplashHeader" element={<SplashHeader />}></Route>
        <Route path="/Body" element={<Body />}></Route>
        <Route path="/Header" element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;
