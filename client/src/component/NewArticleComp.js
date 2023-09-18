import React from 'react';

function NewArticleComp() {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [date, setDate] = React.useState('');
  const [articleText, setArticleText] = React.useState('');
  //const [tags, setTags] = React.useState([]);
  //const [image, setImage] = React.useState('')
  const [output, setOutput] = React.useState([]);
  async function postNewArticle(event) {
    event.preventDefault()
    const request = await fetch('http://localhost:8080/api/article/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
        date,
        articleText
      }),
    })
    const data = await request.json();
    setOutput(data);
  }
  return (
    <React.Fragment>
      <div>
        <form onSubmit={postNewArticle}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text"
            placeholder="date"
          />
          <input
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            type="text"
            placeholder="articleText"
          />
          <input type="submit" value="PostNewArticle" />
        </form>
        <div>{output.map(out => <h2>{out.result}</h2>)}</div>
        </div>
    </React.Fragment>
  );
}

export default NewArticleComp;