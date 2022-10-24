import React, { useState, useEffect } from "react";
import UploadVideo from "./comps/UploadVideo";
import UploadForm from "./comps/UploadForm";
import CreateFile from "./comps/CreateFile";
import firebase from "firebase/compat/app";
import { auth } from "./firebase/config";
import About from "./comps/About";
import Login from "./comps/Login";
import Home from "./comps/Home";

import {
  BrowserRouter,
  HashLink as Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [form, setForm] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");

  const clearInputs = () => {
    setRegisterEmail("");
    setRegisterPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearError();
    firebase
      .auth()
      .signInWithEmailAndPassword(registerEmail, registerPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearError();
    auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              registerEmail={registerEmail}
              registerPassword={registerPassword}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              emailError={emailError}
              setEmailError={setEmailError}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              user={user}
              setUser={setUser}
              clearInputs={clearInputs}
              clearError={clearError}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              handleLogout={handleLogout}
            />
          }
        ></Route>
        <Route path="/UploadForm" element={<UploadForm user={user} />}></Route>
        <Route
          path="/UploadVideo"
          element={<UploadVideo user={user} />}
        ></Route>
        <Route path="/CreateFile" element={<CreateFile user={user} />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
