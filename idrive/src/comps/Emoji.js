import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegFileCode } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Title from "./Title";
import { FaBuffer } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import WebNavBar from "./WebNavBar";
import Login from "./Login";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { send } from "emailjs-com";
import "./Emoji.css";
import About from "./About";

function Emoji(props) {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    send(
      "service_kclcvfv",
      "template_ncnpu1r",
      { name, email, subject, message },
      "FJHF2fSpQZdKRgCuI"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  }

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const {
    registerEmail,
    registerPassword,
    setRegisterEmail,
    setRegisterPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    hasAccount,
    setHasAccount,
    user,
    setUser,
    clearInputs,
    clearError,
    handleLogin,
    handleSignUp,
    handleLogout,
  } = props;

  return (
    <div>
      {" "}
      {user ? (
        <div>
          <WebNavBar handleLogout={handleLogout} />
          <Title user={user} />
          <div className="homepage">
            <div className="section1">
              <motion.div
                className="pane"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaGlobeAmericas className="pane-icon" />
                <div class="about__buttons">
                  <Link to="/createFile" className="button-30">
                    Posts
                  </Link>
                </div>
              </motion.div>
              {/* //Second Pane */}
              <motion.div
                className="pane"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaCameraRetro className="pane-icon" />
                <div class="about__buttons">
                  <Link to="/UploadForm" className="button-30">
                    Photos
                  </Link>
                </div>
              </motion.div>
              {/* Third Pane */}
              <motion.div
                className="pane"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaVideo className="pane-icon" />
                <div class="about__buttons">
                  {" "}
                  <Link to="/UploadVideo" className="button-30">
                    {" "}
                    Videos{" "}
                  </Link>{" "}
                </div>{" "}
              </motion.div>{" "}
            </div>{" "}
            <About />
            <div className="section3" id="section3">
              {/* <h1 className="me-auto ms-auto mt-5">Contact Us</h1> */}

              <div className="container">
                <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                    <h1>Contact Us</h1>
                    <div className="col-8 form-group mx-auto mt-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={handleName}
                        name="name"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        value={subject}
                        onChange={handleSubject}
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <textarea
                        className="form-control"
                        id=""
                        value={message}
                        onChange={handleMessage}
                        cols="30"
                        rows="8"
                        placeholder="Your message"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="mt-2 col-8 pt-3 mx-auto mb-3">
                      <input
                        type="submit"
                        className="btn btn-info"
                        value="Send Message"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">
              <motion.a
                href="https://www.instagram.com/brian_monoranu/"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaInstagram className="fs-3 text-white" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/brian.monoranu/"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaFacebook className="fs-3 text-white" />
              </motion.a>
              <motion.a
                href="https://twitter.com/BrianMonoranu"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaTwitter className="fs-3 text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Login
            registerEmail={registerEmail}
            setRegisterEmail={setRegisterEmail}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            setUser={setUser}
          />{" "}
        </>
      )}{" "}
    </div>
  );
}

export default Emoji;
