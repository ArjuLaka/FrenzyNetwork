import React from 'react'
import Navbar from '../component/Navbar';
import HeaderComp from '../component/HeaderComp';
import SignUpComp from '../component/SignUpComp';

function SignUpPage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <SignUpComp />
      <Navbar />
    </React.Fragment>
  );
}

export default SignUpPage;