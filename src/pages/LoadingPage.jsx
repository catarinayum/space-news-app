import "./UtilPage.css";

export default function Loading() {
  return (
    <>
      {" "}
      <div className="message-container">
        <div className="spinner-text">Loading...</div>
        <div className="spinner"></div>
      </div>
    </>
  );
}
