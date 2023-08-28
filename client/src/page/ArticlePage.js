import React from 'react';
import ArticleComp from '../component/ArticleComp';
import HeaderComp from '../component/HeaderComp';
import Navbar from '../component/Navbar';

function ArticlePage() {
  return (
    <React.Fragment>
      <HeaderComp />
      <ArticleComp />
      <Navbar />
    </React.Fragment>
  );
}

export default ArticlePage;