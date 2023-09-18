import React from 'react';
import NewArticleComp from '../component/NewArticleComp';
import HeaderComp from '../component/HeaderComp';
import Navbar from '../component/Navbar';

function NewArticlePage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <NewArticleComp />
      <Navbar />
    </React.Fragment>
  );
}

export default NewArticlePage;