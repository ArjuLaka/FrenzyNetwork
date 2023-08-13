import React from 'react';
import ArticleComp from '../component/ArticleComp';
import Navbar from '../component/Navbar';

function ArticlePage() {
  return (
    <React.Fragment>
      <ArticleComp />
      <Navbar />
    </React.Fragment>
  );
}

export default ArticlePage;