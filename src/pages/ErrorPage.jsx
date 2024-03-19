import Banner from "../components/Banner";
import "./UtilPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
     <Banner />
      <div className="message-container">
        <h2 className="error-title">404</h2>
        <div className="error-text">
          Oops, something went wrong.
        </div><br></br>
        <Link to ="/">Return to homepage.</Link>
      </div>
    </>
  );
}
