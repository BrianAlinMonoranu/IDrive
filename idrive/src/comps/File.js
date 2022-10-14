import React, { useEffect, useState } from "react";
import useFirestore from "./useFirestore";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaFile } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import "./image.css";

function File({ setSelectedD, documents, user }) {
  const { docs } = useFirestore("documents");

  return (
    <div class="container d-flex flex-column align-items-center">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => setSelectedD(doc.url)}
            key={doc.id}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="row mb-4 box"
            >
              <Card>
                <div className="posts">
                  <Card.Img
                    variant="top"
                    src={doc.url}
                    className="mt-3 box"
                    style={{ borderRadius: "20px" }}
                  />
                  <Card.Body>
                    <h1 style={{ fontSize: "10px" }}>Posted by</h1>
                    <h2 className="box">{doc.email}</h2>
                  </Card.Body>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
}

export default File;
