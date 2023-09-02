import React from 'react'
import Navbar from '../component/Navbar';
import HeaderComp from '../component/HeaderComp';
import SignInComp from '../component/SignInComp';

function SignInPage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <SignInComp />
      <Navbar />
    </React.Fragment>
  );
}

export default SignInPage;