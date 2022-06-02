import React from "react";
import { ReactComponent as InstagramIcon } from "../../assets/instagram_svg.svg";
import { ReactComponent as EpekworksIcon } from "../../assets/epeklogo.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import Aura from "../../assets/Aura.jpeg";
import "./style.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-box">
        <img src={Aura} className="aura-img" alt="main-img" />
        <div className="info">
          <h1>Welcome</h1>
          <p>
            I’m<b> Matea</b>
          </p>
          <p>
            I'm a future Mediadesigner / Webdesigner,I am having an Internship
            at
            <b> epekworks.com.</b>
          </p>
          <p>
            Im a <b>Free Spirit</b> ,interested into <b>Art</b>,learning{" "}
            <b>new Skills and Technology</b>
          </p>
        </div>
        <div className="icons">
          <InstagramIcon />
          <EpekworksIcon />
          <LinkedinIcon />
        </div>
      </div>

      <div className="second-box">
        <div className="link">
          <h3>FreeCodeCamp</h3>
          <a
            href="https://www.freecodecamp.org/matea"
            target="_blank"
            rel="noreferrer"
          >
            https://www.freecodecamp.org/matea
          </a>
        </div>
        <div className="link">
          <h3>LinkedIN</h3>
          <a
            href="https://www.linkedin.com/in/matea-tabak-83440a230/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/matea-tabak-83440a230/
          </a>
        </div>
        <div className="link">
          <h3>Netlify</h3>
          <a
            href="https://dulcet-tiramisu-8b2b08.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            https://dulcet-tiramisu-8b2b08.netlify.app
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;