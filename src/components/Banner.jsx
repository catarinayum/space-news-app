import "./Banner.css";

export default function Banner({ setURL }) {
  const handleRefresh = () => {
    setURL("https://api.spaceflightnewsapi.net/v4/articles/");
  };

  return (
    <a onClick={handleRefresh}>
      <h1>Space News</h1>
    </a>
  );
}
