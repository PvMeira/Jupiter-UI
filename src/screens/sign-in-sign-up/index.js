import React from "react";
import "./style.scss";

import SignIn from "../../components/core/sign-in/index";
import SingUp from "../../components/core/sign-up/index";

const SignInAndSignOut = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SingUp />
    </div>
  );
};

export default SignInAndSignOut;
