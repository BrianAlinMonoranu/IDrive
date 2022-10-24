import React from "react";
import { FaMixcloud } from "react-icons/fa";
import "./Title.css";

const Title = () => {
  return (
    <div className="newTitle">
      <FaMixcloud className="logo" />
      <h1> IDrive </h1>
      <p className="gap"> Store and Share Photos - Videos </p>{" "}
    </div>
  );
};

export default Title;
