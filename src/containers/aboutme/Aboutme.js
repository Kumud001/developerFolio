
import { Fade } from "react-reveal";
// import emoji from "react-easy-emoji";
import "./Aboutme.scss";
import StyleContext from "../../contexts/StyleContext";
import React, { useContext } from "react";


import { aboutMe } from "../../portfolio";

export default function AboutMe() {
  const { isDark } = useContext(StyleContext);
  if (!aboutMe.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="about-me-section" id="aboutme">
        <h1 className={isDark ? "dark-mode about-me-title" : "about-me-title"}>
          {aboutMe.title}
        </h1>
        <p
          className={
            isDark ? "dark-mode about-me-subtitle" : "about-me-subtitle"
          }
        >
          {aboutMe.subTitle}
        </p>
        {/* <ul className={isDark ? "dark-mode hobbies" : "hobbies"}>
          {aboutMe.hobbies.map((hobby, index) => (
            <li key={index}>{emoji("🌟 ")}{hobby}</li>
          ))}
        </ul> */}
      </div>
    </Fade>
  );
}
