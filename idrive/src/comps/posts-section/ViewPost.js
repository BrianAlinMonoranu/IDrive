import React from "react";
import { motion } from "framer-motion";

function ViewPost({ selectedD, setSelectedD }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedD(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedD}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default ViewPost;
