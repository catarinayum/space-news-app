import "./UtilPage.css";

export default function Loading() {
  return (
    <>
      {" "}
      <div className="message-container">
        <div className="error-text">
          Oops, something went wrong. Refresh page to try again.
        </div>
      </div>
    </>
  );
}
