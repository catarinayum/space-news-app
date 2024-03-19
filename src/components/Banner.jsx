import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Link to="/">
      <h1>Space News</h1>
    </Link>
  );
}
