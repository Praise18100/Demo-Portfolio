import "./intro.scss";
//import { init } from "ityped";//
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typedInstance: Typed | null = null;

    if (textRef.current) {
      typedInstance = new Typed(textRef.current, {
        typeSpeed: 69,
        loop: true,
        backSpeed: 69,
        strings: ["Developer", "Designer", "Content Creator"],
      });
    }

    return () => {
      typedInstance?.destroy();
    };
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
          <p className="eyebrow">Digital Product Engineer</p>
          <h2>Hi there, I'm</h2>
          <h1>AKENROYE Praise</h1>
          <h3>
            I build standout experiences as a <span ref={textRef} />
          </h3>
          <p className="summary">
            I help startups and growing brands launch beautiful, reliable web
            products that users enjoy and teams can scale.
          </p>
          <div className="actions">
            <a href="#portfolio" className="primaryBtn">
              View Projects
            </a>
            <a href="#contact" className="ghostBtn">
              Book a Call
            </a>
          </div>
        </div>

        <a href="#portfolio" className="scrollHint">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
