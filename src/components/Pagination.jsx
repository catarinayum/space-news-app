// why can't I pass previous and next props directly?
// because I don't want to go to api link, I want to USE api link
export function Pagination({ URL, setURL, data }) {

  const handlePrev = () => {
    if (!data.previous) {
      setURL(URL);
    } else {
      setURL(data.previous);
    }
  };

  const handleNext = () => {
    if (!data.next) {
      setURL(URL);
    } else {
      setURL(data.next);
    }
  };

  return (
    <div className="pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={handlePrev}>
              Previous
            </a>
          </li>

          {/* missing page number logic, implement handlePageClick() */}
          {/* <li className="page-item">
            <a className="page-link" href={URL}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={URL}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={URL}>
              3
            </a>
          </li>  */}

          <li className="page-item">
            <a className="page-link" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
