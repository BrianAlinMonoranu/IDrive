import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ReactPlayer from "react-player";
import UploadVideo from "./UploadVideo";

function VideoView({ selectedV, setSelectedV }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedV(null);
    }
  };

  const download = (e) => {
    console.log("hello");
    e.target.innerHTML = ` <a download= {selectedImg} href="Brian_Alin_Monoranu___CV .pdf">`;
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }}>
        <div className="player-wrapper">
          <ReactPlayer
            controls
            className="react-player"
            width="100%"
            url={selectedV}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default VideoView;
