import React from 'react';
import BookComp from '../component/BookComp';
import Navbar from '../component/Navbar';

function BookPage() {
  return (
    <React.Fragment>
      <BookComp />
      <Navbar />
    </React.Fragment>
  );
}

export default BookPage;