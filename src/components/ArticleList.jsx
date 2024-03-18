import "./ArticleList.css";

// eslint-disable-next-line react/prop-types
export default function ArticleList({ articles }) {

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
              <div className="article-details">
                <p>Published on: {article.published_at.slice(0, 10)}</p>
                <p className="read-more">Read more...</p>
              </div>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
