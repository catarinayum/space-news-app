import { useState, useEffect } from "react";
import Banner from "./components/Banner";

import "./App.css";
import Loading from "./pages/Loading";
import SearchBar from "./components/SearchBar";
import Sorting from "./components/Sorting";
import ArticleList from "./components/ArticleList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  const [URL, setURL] = useState(
    "https://api.spaceflightnewsapi.net/v4/articles/"
  );
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState();

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner setURL={setURL} />
      <main>
        <div className="navigation">
          {" "}
          <SearchBar setURL={setURL} query={query} setQuery={setQuery} />
          <Sorting setURL={setURL} />
        </div>

        <ArticleList articles={articles} loading={loading} />
        <Pagination data={data} URL={URL} setURL={setURL} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
