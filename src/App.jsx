import { useState, useEffect } from "react";
import { Banner } from "./components/Banner";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { ArticleList } from "./components/ArticleList";
import { Pagination } from "./components/Pagination";

function App() {
  const [URL, setURL] = useState(
    "https://api.spaceflightnewsapi.net/v4/articles/"
  );
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState();

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles :(");
        }
        //json to objects
        const articles = await response.json();

        setArticles(articles.results);

        setData(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
      setLoading(false);
    };

    fetchArticles();
    //if URL is changed, effect re-runs
  }, [URL]);

  return (
    <div>
      <Banner />
      <SearchBar setURL={setURL} query={query} setQuery={setQuery} />
      <ArticleList articles={articles} loading={loading} />
      <Pagination data={data} URL={URL} setURL={setURL} />
    </div>
  );
}

export default App;
