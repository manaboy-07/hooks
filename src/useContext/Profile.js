/** @format */

import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
function SignUp() {
  const { username } = useContext(LoginContext);
  return (
    <div>
      This is a profile page
      <h1>Profile name {username}</h1>
    </div>
  );
}

export default SignUp;
