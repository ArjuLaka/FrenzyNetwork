import React from 'react';
import HomeComp from '../component/HomeComp';
import Navbar from '../component/Navbar';
import HeaderComp from '../component/HeaderComp';

function HomePage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <HomeComp />
      <Navbar />
    </React.Fragment>
  )
}

export default HomePage;