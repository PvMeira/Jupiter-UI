import React from "react";
import SignIn from "../../components/core/sign-in/index";
import SingUp from "../../components/core/sign-up/index";
import { SignInAndSignOutContainer } from "./style";

const SignInAndSignOut = () => {
  return (
    <SignInAndSignOutContainer>
      <SignIn />
      <SingUp />
    </SignInAndSignOutContainer>
  );
};

export default SignInAndSignOut;
