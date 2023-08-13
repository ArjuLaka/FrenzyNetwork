import React from 'react';
import GameComp from '../component/GameComp';
import Navbar from '../component/Navbar';

function GamePage() {
  return (
    <React.Fragment>
      <GameComp />
      <Navbar />
    </React.Fragment>
  );
}

export default GamePage;