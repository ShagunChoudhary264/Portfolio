import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../../img/heartemoji.png";
import Glasses from "../../../img/glasses.png";
import Humble from "../../../img/humble.png";
import Card from "../Card/Card";
import SHAGUN_RESUME from './SHAGUN_RESUME.pdf'
import { themeContext } from '../../../Context';

const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    // transition
    const transition = {
      duration: 1,
      type: "spring",
    };
  
    return (
      <div className="services" id="services">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>services</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <a href={SHAGUN_RESUME} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right */}
        <div className="cards">
          {/* first card */}
          <div  
            style={{ left: "14rem" }}

          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </div>
          {/* second card */}
          <div
            style={{top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            />
          </div>
          {/* 3rd */}
          <div
           style={{ top: "19rem", left: "12rem"}}
          >
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={
                "Lorem ispum dummy text are usually use in section where we need some random text"
              }
              color="rgba(252, 166, 31, 0.45)"
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Services;