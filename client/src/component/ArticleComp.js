import React from 'react';
import { Link, useParams } from 'react-router-dom';
import renderArticle from '../utils/RenderElement'

function ArticleComp() {
  let { articleId } = useParams();
  const [articleOutput, setArticleOutput] = React.useState({
    title: '',
    author: '',
    date: '',
    contents: [],
    tags: [],
    image: '',
  });
  const getArticle = React.useCallback(async () => {
    const request = await fetch(`http://localhost:8080/api/article/${articleId}`, {
      method: 'GET',
    })
    const data = await request.json()
    console.log(data)
    setArticleOutput(data)
  }, [articleId]);
  
  React.useEffect(() => {
    getArticle();
  }, [getArticle])
  return (
    <React.Fragment>
     <div className="grand-article">
      <div className="parent-article">
        <div className="page-profile">
          <div className="page-directory">
            <Link to="/">Beranda</Link>
            <Link to="/article">/Artikel</Link>
            <Link to="/article/1">/{articleOutput.title}</Link>
          </div>
          <div className="article-id" >
            ID Artikel: {articleId}
          </div>
        </div>
        <div className="article-header">
          <div className="article-title">
            <h1>{articleOutput.title}</h1>
          </div>
          <div className="article-author">
            <p>Penulis: {articleOutput.author}</p>
          </div>
          <div className="article-date">
            <p>Tanggal: {articleOutput.date}</p>
          </div>
        </div>
        <article className="article-body" >
          <img src={articleOutput.image} alt="sdgs7" />
          {articleOutput.contents ? articleOutput.contents.map((content) => renderArticle(content)) : null}
        </article>
        <div className="article-tags">
          <h2>Tags: </h2><ul>
            {articleOutput.tags ? articleOutput.tags.map((tag) => <li>{tag}</li>) : null}
          </ul>
        </div>
      </div>
     </div>
    </React.Fragment>
  );
}

export default ArticleComp;