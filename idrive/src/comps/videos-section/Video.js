import React, { useState, useEffect } from "react";
import useFirestore from "../useFirestore";
import { motion } from "framer-motion";
import Background from "../studio.png";

function Video({ setSelectedV, user }) {
  const { docs } = useFirestore("videos");

  const [newDocs, setNewDocs] = useState([]);
  let newdocs = [];

  useEffect(() => {
    docs.forEach((e) => {
      if (e.userId === user.uid) {
        newdocs.push(e);
      }
    });
    setNewDocs(newdocs);
  }, [docs]);

  return (
    <div className="img-grid">
      {newDocs &&
        newDocs.map((doc) => (
          <div>
            <motion.div
              layout
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              className="img-wrap"
              whileHover={{ opacity: 1, scale: 1.2, rotate: 360 }}
              onClick={() => setSelectedV(doc.url)}
              key={doc.id}
            >
              <div
                className="videos"
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <img src={Background} />
              </div>{" "}
              <div className="top"> {doc.Name} </div>
            </motion.div>
          </div>
        ))}{" "}
    </div>
  );
}

export default Video;
