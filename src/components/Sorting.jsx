export function Sorting({ setURL }) {
  ///https://api.spaceflightnewsapi.net/v4/articles/?ordering=published_at
  const handleNewest = () => {
    setURL("https://api.spaceflightnewsapi.net/v4/articles/");
  };
  const handleOldest = () => {
    setURL(
      "https://api.spaceflightnewsapi.net/v4/articles/?ordering=published_at"
    );
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort by
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={handleNewest}>
          Newest
        </a>
        <a className="dropdown-item" onClick={handleOldest}>
          Oldest
        </a>
      </div>
    </div>
  );
}
