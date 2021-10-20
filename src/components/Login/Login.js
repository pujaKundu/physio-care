import React from "react";
import initializeAuthentication from "../../firebaseFile/firebase.init";

import Button from "@restart/ui/esm/Button";

import Register from "../Register/Register";
import useAuth from "../../hook/useAuth";

initializeAuthentication();

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div>
      <Register />
      <br />
      <p>or</p>
      <Button
        className="mb-5 bg-warning btn text-dark"
        onClick={signInUsingGoogle}
      >
        Login Using Google
      </Button>
    </div>
  );
};

export default Login;
