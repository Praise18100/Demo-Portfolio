import { useState } from "react";
import "./work.scss";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/mobile-phone.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, qui",
      img: "assets/project1.png",
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, qui",
      img: "assets/project2.png",
    },
    {
      id: 3,
      icon: "assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, qui",
      img: "assets/project3.png",
    },
  ];

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
    } else {
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="icon" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="project" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowLeft className="arrow left" onClick={() => handleClick("left")} />
      <ArrowRight
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
