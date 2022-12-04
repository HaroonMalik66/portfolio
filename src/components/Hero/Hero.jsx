import React from "react";

import Header from "../Header/Header";
import profilePhoto from "../../assets/profile.jpg";
import email from "../../assets/envelope-solid.svg";
import { ReactComponent as Whatsapp } from "../../assets/square-whatsapp.svg";

import "./Hero.css";

function Hero() {
  return (
    <div className="Hero" id="home">
      <Header />
      <div className="hero-body">
        <div className="left-h">
          <div className="hero-text">
            <div>
              <span className="heading-h">
                <hr />
                <span className="stroke-text"> Front-end</span> Web Developer
              </span>
            </div>
            <div>
              <span className="subheading-h">
                I am a dedicated & self motivated person skilled in frontend web
                developement having good knowledge of React framework and other
                technologies.
              </span>
            </div>
            <div className="button-container-h">
              <a
                className="hero-btn-a"
                target="_blank"
                rel="noreferrer"
                href="mailto:haroonmalik4219855@gmail.com"
              >
                <button className="btn header-btn">
                  Contact Me <img src={email} alt=" " className="icon-h" />
                </button>
              </a>
              <a
                className="hero-btn-a"
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/+923098039903"
              >
                <button className="btn header-btn">
                  Contact Me <Whatsapp fill="green" style={{ width: "1rem" }} />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="right-h">
          <div></div>
          <img src={profilePhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
