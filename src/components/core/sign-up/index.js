import React, { useState } from "react";
import "./style.scss";
import FormInput from "../form-input/index";
import CustomButton from "../custom-button/index";
import { auth } from "../../../firebase/firebase.utils";
import { createUser } from "../../../service/UserService";

const formBasic = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SingUp = () => {
  const [form, setForm] = useState(formBasic);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password dosent match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      await createUser(user, { displayName: form.displayName });
      setForm(formBasic);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    await setForm({ ...form, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          required
          label='Display name'
          value={form.displayName}
          handleChange={handleChange}
        />
        <FormInput
          type='email'
          name='email'
          required
          label='Email'
          value={form.email}
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          required
          label='Password'
          value={form.password}
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='confirmPassword'
          required
          label='Confirm Password'
          value={form.confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SingUp;
