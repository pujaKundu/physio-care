import React from "react";
import initializeAuthentication from "../../firebaseFile/firebase.init";

import Button from "@restart/ui/esm/Button";

import useFirebase from "../../hook/useFirebase";
import Register from "../Register/Register";

initializeAuthentication();

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <Register />
      <br />
      <span>or</span>
      <Button onClick={signInUsingGoogle}>Login Using Google</Button>
    </div>
  );
};

export default Login;
