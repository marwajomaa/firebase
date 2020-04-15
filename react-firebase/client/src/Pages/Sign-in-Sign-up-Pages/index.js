import React from 'react';
import SignIn from '../../Components/Sign-in';
import SignUp from '../../Components/Sign-up'

const SignInSignUpPage = () =>(
  <div style = {{ padding: '0 2rem', display: 'flex', justifyContent: 'space-between'}}>
      <SignIn />
      <SignUp />
  </div>
)
export default SignInSignUpPage;