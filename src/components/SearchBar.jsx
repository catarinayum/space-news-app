import "./SearchBar.css";

//why didn't setURL
export default function SearchBar({ setURL, query, setQuery }) {
  const handleChange = (e) => {
    //tried input validation before enter, won't allow deleting last character
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setURL(`https://api.spaceflightnewsapi.net/v4/articles/?search=${query}`);
    setQuery("");
  };

  //Add no results found

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          id="query"
          type="text"
          placeholder="Insert search..."
          value={query}
          onChange={handleChange}
        ></input>
        <button onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </form>
    </>
  );
}
