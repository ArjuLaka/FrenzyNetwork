import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleComp() {
  let { articleId } = useParams();
  const [articleOutput, setArticleOutput] = React.useState({
    title: '',
    author: '',
    date: '',
    content: '',
  });
  
  async function getArticle() {
    const request = await fetch(`http://localhost:8080/api/article/${articleId}`, {
      method: 'GET',
    })
    const data = await request.json()
    console.log(data)
    setArticleOutput(data)
  }
  React.useEffect(() => {
    getArticle();
  }, [])
  return (
    <React.Fragment>
      <div>
        <div className="page-directory">
          <p>{articleId}</p>
        </div>
        <div className="article-header">
          <div className="article-title">
            <h1>{articleOutput.title}</h1>
          </div>
          <div className="article-author">
          
          </div>
          <div className="article-date">
          
          </div>
        </div>
        <article className="article-body" >
          <p>{articleOutput.content}</p>
        </article>
        <div className="article-tags">
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default ArticleComp;