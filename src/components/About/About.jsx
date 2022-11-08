import React from "react";

import profile2 from "../../assets/profile2.png";
import pkflag from "../../assets/pkflag.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <span className="heading-s">
        About <span className="stroke-text">me</span>{" "}
      </span>
      <div className="about-card">
        <div>
          <div className="left-a">
            <img src={profile2} alt=" " />
          </div>
          <div className="right-a">
            <table>
              <tr>
                <td>Name: </td>
                <td>Haroon Ahmed</td>
              </tr>
              <tr>
                <td>Education: </td>
                <td>BS Computer Science</td>
              </tr>
              <tr>
                <td>Age: </td>
                <td>22</td>
              </tr>
              <tr>
                <td>Country: </td>
                <td>
                  Pakistan <img src={pkflag} alt=" " className="pkflag" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <hr />
        <div className="about-text">
          I am a tech ethusiast since childhood. I love to learn new things and
          stay updated with the latest technology. I opened my career in the
          world of programming with web developement. But I want to learn other
          technologies as well. My ultimate goal is to improve my values as much
          as I can and serve the humanity.
        </div>
      </div>
    </div>
  );
};

export default About;
