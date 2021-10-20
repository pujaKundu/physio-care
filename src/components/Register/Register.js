import React from "react";

import { useState } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../../firebaseFile/firebase.init";
initializeAuthentication();
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be atleast 6 characters long");
      return;
    }
    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const createNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          setUserName();
        })
        .catch((error) => {
          setError(error.message);
        });
      e.preventDefault();
    };
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  return (
    <>
      <Form className="mx-5 my-5">
        <h3 text="dark">Please {isLogin ? "Login" : "Register"}</h3>
        {!isLogin && (
          <Form.Group as={Row} className="my-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Your Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className=""
                onBlur={handleNameChange}
                placeholder="Enter Name"
                required
              />
            </Col>
          </Form.Group>
        )}
        <Form.Group as={Row} className="my-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              className=""
              onBlur={handleEmailChange}
              placeholder="Enter Email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Enter Password"
              required
            />
          </Col>
          <Col sm="10">
            <h5 className="text-danger">{error}</h5>
          </Col>
          <Col sm="10">
            <InputGroup className="pe-5">
              <InputGroup.Checkbox
                onChange={toggleLogin}
                aria-label="Already Registered?"
              />
              Already Registered?
            </InputGroup>
          </Col>
          <Col sm="10">
            <Button
              variant="dark"
              onClick={handleRegistration}
              className="mt-3"
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default Register;
