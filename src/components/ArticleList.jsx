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
          <li key={article.id} className="article rounded">
            <a href={article.url} target="_blank">
              {" "}
              <div className="img-container">
                <img
                  src={article.image_url}
                  className="article-img img-fluid rounded"
                ></img>{" "}
              </div>
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
              <p className="read-more">Read more...</p>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
