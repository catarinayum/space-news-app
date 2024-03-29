import { useState, useEffect, createContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./GeneralListPage.css";

import Loading from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import Banner from "../components/Banner";
import DarkMode from "../components/DarkModeSwitch";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";
import ItemList from "../components/ItemList";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export const ThemeContext = createContext(null);

function GeneralListPage({ endpoint, contentType }) {
  const [URL, setURL] = useState(endpoint);
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState();
  const [page, setPage] = useState();

  const [query, setQuery] = useState("");

  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  //implement abortController
  const location = useLocation();
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}`);

        //json to objects
        const articles = await response.json();

        setArticles(articles.results);
        setData(articles);
      } catch (error) {
        setError(error);
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    //if URL is changed, effect re-runs
  }, [URL]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  console.log(location.pathname);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Banner />
        <main>
          <DarkMode theme={theme} toggleTheme={toggleTheme} />
          <div className="navbar">
            <div className="navigation">
              <NavLink
                className={location.pathname === "/" ? "fw-bold" : ""}
                to="/"
              >
                Articles
              </NavLink>
              <NavLink
                className={location.pathname === "/blog-posts" ? "fw-bold" : ""}
                to="/blog-posts"
              >
                Blog posts
              </NavLink>{" "}
              <NavLink
                className={location.pathname === "/reports" ? "fw-bold" : ""}
                to="/reports"
              >
                Reports
              </NavLink>
            </div>

            <SearchBar
              setURL={setURL}
              contentType={contentType}
              query={query}
              setQuery={setQuery}
            />
          </div>
          <Sorting setURL={setURL} contentType={contentType} />
          <ItemList articles={articles} URL={URL} />
          <Pagination data={data} URL={URL} setURL={setURL} />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default GeneralListPage;
