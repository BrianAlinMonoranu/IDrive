import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ collection, file, setFile, setSelectedShow, user }) => {
  const { url, progress, newUser } = useStorage(file, collection, user);

  useEffect(() => {
    //if Url exists then we set the fil to null and therefore no more progress bar
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  //If Url and setFile changes changes then funtion above will activate

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
