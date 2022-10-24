import { FaMixcloud } from "react-icons/fa";
import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="newTitle">
      <FaMixcloud className="logo" />
      <h1> IDrive </h1>
      <p className="gap"> - Store and share photos and videos with IDrive - </p>
    </div>
  );
};

export default Title;
