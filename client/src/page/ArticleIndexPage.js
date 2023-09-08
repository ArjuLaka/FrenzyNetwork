import React from 'react';
import ArticleIndexComp from '../component/ArticleIndexComp';
import Navbar from '../component/Navbar';
import HeaderComp from '../component/HeaderComp';

function ArticleIndexPage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <ArticleIndexComp />
      <Navbar />
    </React.Fragment>
  );
}

export default ArticleIndexPage;