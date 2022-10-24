import React from "react";
import { FaBuffer } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

function About() {
  return (
    <div className="section2">
      <div className="About-Us-Title" id="section2">
        ABOUT US
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="About-us-card">
            <div className="icon">
              <FaBuffer className="icon-size" />
            </div>
            <div className="content">
              <h2> We store your Memories </h2>
              <p>
                IDrive enables you to store up to 10 GB worth of photos,
                documents and videos for free!IDrive uses Firebase to store all
                your important Files.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="About-us-card">
            <div className="icon">
              <FaRegLightbulb className="icon-size" />
            </div>
            <div className="content">
              <h2> We are here since 2022! </h2>
              <p>
                This Website was created in order to help students store files
                This Website was created in May 2022 in order to help students
                with their studies
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="About-us-card">
            <div className="icon">
              <FaRegEye className="icon-size" />
            </div>
            <div className="content">
              <h2> Sit back, Enjoy and Relax </h2>
              <p>
                IDrive enables you are able to watch all your favourite videos
                through this app and view all your favourite files in this app{" "}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default About;
