import "./UtilPage.css";

export default function NoResults({query}) {
  return (
    <>
      <div className="message-container">
        <h4 className="error-title">No results for "{query}"</h4>
        <div className="error-text">Try searching for something else!</div>

      </div>
    </>
  );
}
