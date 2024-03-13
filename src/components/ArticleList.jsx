import "./ArticleList.css";

// eslint-disable-next-line react/prop-types
export function ArticleList({ articles, loading }) {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <ul className="articles-div">
      {
        // eslint-disable-next-line react/prop-types
        articles.map((article) => (
          <li key={article.id} className="article">
            <a href={article.url} target="_blank">
              <h4>{article.title}</h4>
              <img src={article.image_url} className="article-img"></img>
              <p>{article.summary}</p>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
