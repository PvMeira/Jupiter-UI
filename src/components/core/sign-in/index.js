import React, { useState } from "react";
import FormInput from "../../core/form-input/index";
import CustomButton from "../../core/custom-button/index";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
import { ButtonContainer, Title, SignInContainer } from "./style";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(form.email, form.password);
      setForm({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = async (event) => {
    const { name, value } = event.target;
    await setForm({ ...form, [name]: value });
  };
  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          id='email-input'
          type='email'
          name='email'
          value={form.email}
          handleChange={handleChange}
          required
          label='Email'
        />
        <FormInput
          id='password-input'
          name='password'
          value={form.password}
          handleChange={handleChange}
          required
          type='password'
          label='Password'
        />
        <ButtonContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' isPrimary onClick={signInWithGoogle}>
            Sign in with google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
