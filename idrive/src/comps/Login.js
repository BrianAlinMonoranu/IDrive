import { FaMixcloud } from "react-icons/fa";
import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Login({
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  setUser,
}) {
  return (
    <body>
      <div className="Login-page">
        <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center w-100">
            <FaMixcloud className="ic mb-4" />
            <h1 className="fs-3">IDrive</h1>
            <FaArrowAltCircleDown className="arr" />
            {hasAccount ? (
              <h2 className="fs-3 mt-4 mb-5">Login </h2>
            ) : (
              <h2 className="fs-3 mt-4 mb-5">Create an Account </h2>
            )}
            <Form.Group>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Email Address"
                autoComplete="username"
                required
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <p className="errorMsg"> {emailError} </p>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mt-3"
                type="password"
                size="lg"
                placeholder="Password"
                autoComplete="current-password"
                required
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <p className="errorMsg"> {passwordError} </p>
            </Form.Group>
            <div className="d-grid">
              {hasAccount ? (
                <>
                  <Button
                    onClick={handleLogin}
                    className="mt-4 mb-4"
                    variant="primary"
                    size="lg"
                  >
                    Log In
                  </Button>
                  <p>
                    Don't Have an account ?
                    <span
                      className="spans"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Sign Up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleSignUp}
                    className="mt-4 mb-4"
                    variant="primary"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                  <p>
                    Have an Account ?
                    <span
                      className="spans"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      Log In
                    </span>
                  </p>
                </>
              )}
            </div>
          </Form>
        </Container>
      </div>
    </body>
  );
}

export default Login;
