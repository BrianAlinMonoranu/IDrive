import ToastContainer from "react-bootstrap/ToastContainer";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";
import React from "react";
import "./Title.css";

const Title = ({ user }) => {
  const [showA, setShowA] = useState(true);
  const [position, setPosition] = useState("top-end");
  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="title">
      <ToastContainer className="mt-5 me-2" position={position}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <FaMixcloud className="me-4 ms-2 fs-2" />
            <strong className="me-auto">Welcome back!</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body className="me-2 ms-2">
            {user.email} follow us on instagram and facebook to keep up with our
            future updates
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <FaMixcloud className="tommy" />
      <h2> Welcome </h2>
      <h2 style={{ marginBottom: "2%" }}>{user.email} </h2>{" "}
      <p className="gap"> - Store and share photos and videos with IDrive - </p>
      <FaAngleDoubleDown className="icon-arr" />
    </div>
  );
};

export default Title;
