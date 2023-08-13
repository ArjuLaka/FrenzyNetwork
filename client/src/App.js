import HomePage from './page/HomePage';
import ArticlePage from './page/ArticlePage';
import ForumPage from './page/ForumPage';
import GamePage from './page/GamePage';
import BookPage from './page/BookPage';
import NotFound from './page/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper, faUserTie, faHouse, faGamepad, faBook } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

library.add(faNewspaper, faUserTie, faHouse, faGamepad, faBook)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article">
          <Route index element={<ArticlePage />} />
          <Route path=":articleId" />
          <Route path="new" />
        </Route>
        <Route path="/forum">
          <Route index element={<ForumPage />} />
          <Route path=":forumId" />
          <Route path="new" />
        </Route>
        <Route path="game">
          <Route index element={<GamePage />} />
          <Route path=":gameId" />
          <Route path="new" />
        </Route>
        <Route path="book">
          <Route index element={<BookPage />} />
          <Route path=":bookId" />
          <Route path="new" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
