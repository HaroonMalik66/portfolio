import React, { useState } from "react";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";

import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="Header">
      <span className="name-h">Haroon Ahmed</span>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <>
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => {
                  setMenuOpened(false);
                }}
                to="home"
                spy
                smooth
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="skills" spy smooth>
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="portfolio"
                spy
                smooth
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="about" spy smooth>
                About me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="contact"
                spy
                smooth
              >
                Contact
              </Link>
            </li>
            <a
              className="header-btn-link"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/12AGqRlIkrmhezYlGePZyFX2bmwJPOXYz/view?usp=drivesdk"
            >
              <button className="btn header-btn">Download CV</button>
            </a>
          </ul>
        </>
      )}
    </div>
  );
};

export default Header;
