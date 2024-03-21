import "./ItemList.css";
import NoResults from "../pages/NoResults";

// eslint-disable-next-line react/prop-types
export default function ItemList({ articles, URL }) {
  const query = URL.slice(URL.indexOf("=") + 1);
  if (Object.keys(articles).length > 0) {
    return (
      <>
        {" "}
        {query && URL.indexOf("=") > 1 && query != "published_at" ? (
          <h6>Showing results for "{query}"</h6>
        ) : (
          ""
        )}
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
      </>
    );
  } else {
    return <NoResults query={query} />;
  }
}
