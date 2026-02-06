import "./intro.scss";
//import { init } from "ityped";//
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      new Typed(textRef.current, {
        typeSpeed: 69,
        loop: true,
        backSpeed: 69,
        strings: ["Developer", "Designer", "Content Creator"],
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/PRAISE.png" alt="Praise" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>AKENROYE Praise</h1>
          <h3>
            Freelance <span ref={textRef} />
          </h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
